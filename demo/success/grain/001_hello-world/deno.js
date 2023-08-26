// import Context from "./snapshot_preview1.ts";
import Context from "https://deno.land/std@0.200.0/wasi/snapshot_preview1.ts";

const options = JSON.parse(Deno.args[0])
const pathname = Deno.args[1]
const binary = await Deno.readFile(pathname)
const module = await WebAssembly.compile(binary)

const context = new Context({
  env: {
    ...options.env
  }
, args: [pathname].concat(options.args)
, preopens: options.preopens
})

const instance = new WebAssembly.Instance(module, {
  "wasi_snapshot_preview1": context.exports
, jsapi: {
    console_log: s => {
        s === -2
      ? console.log(true)
      : s === 2147483646
      ? console.log(false)
      : s % 2 === 0
      ? console.log(s)
      : console.log((s - 1) / 2)
    }
  }
})

context.start(instance)
