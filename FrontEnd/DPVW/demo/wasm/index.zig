extern fn console_log(i32) void;

export fn print(i: i32) void {
  console_log(i);
}

export fn main() void {
  console_log(123);
}
