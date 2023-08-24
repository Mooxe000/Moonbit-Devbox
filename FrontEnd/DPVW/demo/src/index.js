const env = {
	console_log: s => console.log(s)
, __writeln: (ptr, len) => {
		console.log(get_string(ptr, len))
	}
, __panic_abort: (ptr, len) => {
		throw get_string(ptr, len)
	}
}

const res = await WebAssembly.instantiateStreaming(
	fetch("index.wasm")
, { env }
)

memory = res.instance.exports['memory']

console.time('main.main')
res.instance.exports['main.main']()
console.timeEnd('main.main')
