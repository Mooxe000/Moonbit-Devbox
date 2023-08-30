fn JS.console_log(&u8, int)

pub fn console_log(s string) {
	JS.console_log(s.str, s.len)
}

pub fn main() {
	console_log('Hello World!')
	println('Hello WASI!')
}
