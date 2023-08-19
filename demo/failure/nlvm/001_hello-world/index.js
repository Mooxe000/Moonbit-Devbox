const wasmBytes = await Deno.readFile('./math.wasm')

const result = await WebAssembly.instantiate(
    wasmBytes
  , {
      env: {
        print: r => console.log(`The result is ${r}`)
      }
    }
  )

const { add } = result.instance.exports

add(1, 2)
