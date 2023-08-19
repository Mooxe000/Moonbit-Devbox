proc emscripten_run_script_string(scriptstr: cstring) {.header: "<emscripten.h>",
importc: "emscripten_run_script_string".}

emscripten_run_script_string(
  "require(['dojo/dom'],function(dom){dom.byId('output').value='Hello world from Nim via JavaScript with Dojo!';});"
)
