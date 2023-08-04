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

const add = wasmInstance.exports['001_add_int/main::add']
console.log(add(2, 3))
