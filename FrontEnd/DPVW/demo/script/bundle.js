import { bundle } from "https://deno.land/x/emit/mod.ts"
import { format } from "npm:prettier"
import { ensureDir } from "https://deno.land/std/fs/mod.ts"

const result = await bundle(
  "./src/index.js"
)

const { code } = result

// console.log(await format(code, {semi: false, parser: "babel"}))

await ensureDir('./build/assets/')
await Deno.writeTextFile(
  './build/assets/index.bundle.js'
, await format(code, {
    semi: false
  , parser: "babel"
  })
)
