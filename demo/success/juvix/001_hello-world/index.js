import Context from "https://deno.land/std@0.198.0/wasi/snapshot_preview1.ts"

const options = JSON.parse(Deno.args[0])
const pathname = Deno.args[1]
const binary = await Deno.readFile(pathname)
const module = await WebAssembly.compile(binary)

const context = new Context({
  env: options.env
, args: [pathname].concat(options.args)
, preopens: options.preopens
})

const instance = new WebAssembly.Instance(module, {
  "wasi_snapshot_preview1": context.exports
})

context.start(instance)
