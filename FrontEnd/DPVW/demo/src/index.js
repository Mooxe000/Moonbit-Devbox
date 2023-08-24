const env = {
	console_log: s => console.log(s)
, __writeln: (ptr, len) => {
		console.log(get_string(ptr, len))
	}
, __panic_abort: (ptr, len) => {
		throw get_string(ptr, len)
	}
}

WebAssembly.instantiateStreaming(
	fetch("/static/index.wasm")
, {env: env}
).then( res => {
	res.instance.exports['memory']

	console.time('main.main')
	res.instance.exports['main.main']()
	console.timeEnd('main.main')
})

// const res = await WebAssembly.instantiateStreaming(
// 	await fetch("/static/index.wasm")
// , { env }
// )

// memory = res.instance.exports['memory']

// console.time('main.main')
// res.instance.exports['main.main']()
// console.timeEnd('main.main')
