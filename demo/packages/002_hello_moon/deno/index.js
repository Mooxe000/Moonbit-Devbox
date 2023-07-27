const wasmBytes = await Deno.readFile('./main.wasm')

const spectest = {
  spectest: {
    print_i32: x => () => {}
  , print_char: x => () => {}
  , print_f64: x => () => {}
  }
}

const wasmModule = new WebAssembly.Module(wasmBytes)
const wasmInstance = await WebAssembly.instantiate(wasmModule, spectest)

const log = wasmInstance.exports['002_hello_moon/main::log']

// log('M')
const str = log("Hello Moonbit!\n")
console.log(str)
