import { compile as pugCompile } from 'https://esm.sh/pug'
import pretty from 'https://esm.sh/pretty'
import {
  ensureDir
, exists
, copy
} from "https://deno.land/std/fs/mod.ts"

const pubTmpl = await Deno.readTextFile('./src/index.pug')

// console.log(pubTmpl)

// filename: './src/pug/body.pug'
const fn = pugCompile( pubTmpl, {} )

const html = fn()

await ensureDir('./build/assets')

if (
  await exists('./src/assets'
  , {
      isReadable: true
    , isDirectory: true
    }
  )
) {
  await copy(
    './src/assets'
  , './build/assets'
  )
}

await copy(
  './wasm/index.wasm'
, './build/assets/index.wasm'
)

await Deno.writeTextFile(
  './build/index.html'
, pretty(html)
)
