const env = {
  console_log: s => console.log(s)
}

const res = await WebAssembly.instantiateStreaming(
	fetch("/static/index.wasm")
, {env: env}
)

console.log(res.instance)

res.instance.exports['main']()
res.instance.exports['print'](456)
