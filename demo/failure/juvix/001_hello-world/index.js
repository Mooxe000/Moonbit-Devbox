// import Grain from 'https://esm.sh/@grain/js-runner@0.5.13'
// import grain_stdlib from 'https://esm.sh/@grain/stdlib@0.5.13'

// const __dirname = new URL('.', import.meta.url).pathname

// const locator = Grain.defaultFileLocator([
//   __dirname
// , grain_stdlib
// ])

// const GrainRunner = Grain.buildGrainRunner(locator)

// GrainRunner.runFile("fib.gr.wasm")

let Grain = require("@grain/js-runner")

let locator = Grain.defaultFileLocator([
  __dirname
, require.resolve("@grain/stdlib")
])

let GrainRunner = Grain.buildGrainRunner(locator)

GrainRunner.runFile("fib.gr.wasm")
