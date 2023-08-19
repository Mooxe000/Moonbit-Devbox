const wasmBytes = await Deno.readFile('./fib.wasm')

const result = await WebAssembly.instantiate(
    wasmBytes
  , {
      env: {
        print: r => console.log(`The result is ${r}`)
      }
    }
  )

const { fib } = result.instance.exports

const fibArr =
  new Array(10)
  .fill(0)
  .reduce(
    (r, _, i) => [
      ...r
    , fib(i)
    ]
  , []
  )

console.log(fibArr)
