# proc emscripten_run_script(scriptstr: cstring) {.
#   header: "<emscripten.h>"
# , importc: "emscripten_run_script"
# .}

# emscripten_run_script("alert('hi')");
# "document.getElementById('output').value='Hello world from Nim via JavaScript!';"

# emscripten_run_script(
#   "console.log('hello nim-wasm!');"
# )

proc emscripten_run_script(format: cstring) {.
  header: "<emscripten.h>"
, importc: "emscripten_run_script"
.}

emscripten_run_script(
  "console.log('hello nim-wasm!');"
)

# proc displayFormatted(format: cstring): cint {.importc: "printf", varargs, discardable.}

# displayFormatted("My name is %s and I am %d years old!\n", "Ben", 30)

# proc printf(format: cstring): cint {.importc, varargs.}

# discard printf("My name is %s and I am %d years old!\n", "Ben", 30)
