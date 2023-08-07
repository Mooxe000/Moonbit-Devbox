const wasmBytes = await Deno.readFile('./main.wasm')

const spectest = {
  spectest: {
    print_i32: x => { console.log(x) }
  , print_f64: x => { console.log(x) }
  , print_char: x => { console.log(x) }
  }
}

const wasmModule = new WebAssembly.Module(wasmBytes)
const wasmInstance = await WebAssembly.instantiate(wasmModule, spectest)

const log = wasmInstance.exports['003_hello_world/main::log']

// log('Hello World!!!')
log('A')
