const wasmBytes = await Deno.readFile('./wasm.wasm')

const { instance } = await WebAssembly.instantiate(
  wasmBytes
, {
    env: {
      callback: (...args) =>
        console.log.apply(console, args)
    }
  }
)

console.log(instance.exports.add(2, 3))
