import { ZigJS } from './lib/zig-js/zigjs.ts';

export function add(a: number, b: number): number {
  return a + b;
}

const zjs = new ZigJS();
const importObject = {
  module: {},
  env: {},
  ...zjs.importObject(),
};

// const url = new URL('index.wasm', import.meta.url);
// fetch(url.href).then(response =>
const res = await fetch('/static/index.wasm')
const bytes = await res.arrayBuffer()
const results = await WebAssembly.instantiate(bytes, importObject)

const { memory, alert, set_title } = results.instance.exports;

zjs.memory = memory;

// Call whatever example you want:
set_title();
alert();
