// import { ZigJS } from './lib/zig-js/zigjs.ts';
// import { ZigJS } from 'https://esm.sh/gh/mitchellh/zig-js@60ac42ab13/js/src/index.ts';
import { ZigJS } from 'https://esm.sh/zig-js-glue@0.1.3'

export function add(a: number, b: number): number {
  return a + b
}

const zjs = new ZigJS()
const importObject = {
  module: {}
, env: {}
, ...zjs.importObject()
}

// const url = new URL('index.wasm', import.meta.url);
// fetch(url.href).then(response =>
const res = await fetch('/static/main.wasm')
const bytes = await res.arrayBuffer()
const results = await WebAssembly.instantiate(bytes, importObject)

const { memory, alert, set_title } = results.instance.exports

zjs.memory = memory

// Call whatever example you want:
set_title()
alert()
