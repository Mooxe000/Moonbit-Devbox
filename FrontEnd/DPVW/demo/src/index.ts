// import { ZigJS } from './lib/zig-js/zigjs.ts';
// import { ZigJS } from 'https://esm.sh/gh/mitchellh/zig-js@60ac42ab13/js/src/index.ts';
import { ZigJS } from 'https://esm.sh/zig-js-glue@0.1.3'

export function add(a: number, b: number): number {
  return a + b
}

const AsciiToString = (ptr: any, heapu8: any) => {
  let str = '';

  while (1) {
    let ch = heapu8[ptr++];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

const zjs = new ZigJS()
const importObject = {
  module: {}
, env: {
    print: (wasm_str_ptr: any) => {
      const HEAP8 = new Int8Array(memory.buffer);
      const wasm_str = AsciiToString(wasm_str_ptr, HEAP8)
      console.log(wasm_str);
    }
  }
, ...zjs.importObject()
}

// const url = new URL('index.wasm', import.meta.url);
// fetch(url.href).then(response =>
const res = await fetch(`/static/main.wasm?t=${Date.now()}`)
const bytes = await res.arrayBuffer()
const { instance } = await WebAssembly.instantiate(bytes, importObject)

const {
  memory
, alert
, set_title
, main
} = instance.exports

zjs.memory = memory

// Call whatever example you want:
set_title()
alert()
main()
