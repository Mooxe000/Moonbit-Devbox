// extern fn console_log(i32) void;

// export fn print(i: i32) void {
//   console_log(i);
// }

// export fn main() void {
//   console_log(123);
// }

const js = @import("./lib/zig-js/main.zig");

export fn set_title() void {
  set_title_() catch unreachable;
}

export fn alert() void {
  alert_() catch unreachable;
}

fn set_title_() !void {
  const doc = try js.global.get(js.Object, "document");
  defer doc.deinit();

  try doc.set("title", js.string("Hello!"));
}

fn alert_() !void {
  try js.global.call(void, "alert", .{js.string("Hello, world!")});
}
