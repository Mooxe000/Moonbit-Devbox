const js = @import("./zig_modules/zig-js/src/main.zig");

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

extern fn print([*:0]const u8) void;

export fn main() void {
  print("Hello World!!");
}
