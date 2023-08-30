const wasmBytes = await Deno.readFile('./hello.wasm')

const get_string = (ptr, len) => {
  const buf = new Uint8Array(memory.buffer, ptr, len)
  const str = new TextDecoder("utf8").decode(buf)

  return str
}

const result = await WebAssembly.instantiate(
    wasmBytes
  , {
      env: {
        console_log: (ptr, len) => {
          console.log(get_string(ptr, len))
        }
      , __writeln: (ptr, len) => {
          console.log(get_string(ptr, len))
        }
      , __panic_abort: (ptr, len) => {
          throw get_string(ptr, len);
        }
      }
    }
  )

const memory = result.instance.exports['memory']

// console.log(memory)

console.time('main.main')

const main = result.instance.exports['main.main']

main()

console.timeEnd('main.main')
