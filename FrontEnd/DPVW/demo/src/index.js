// import Hello from './pages/index.js'

// van.add(document.body, Hello())
//- van.add(document.getElementById('root'), Hello())

import {Asdom} from 'https://esm.sh/asdom@0.2.2/glue'
import {instantiate} from 'https://esm.sh/@assemblyscript/loader@0.27.9'

const main = async () => {

	const asdom = new Asdom()

	const {exports} = await instantiate(
    fetch('/index.wasm')
  , {
		...asdom.wasmImports
	})

	asdom.wasmExports = exports

	exports._start()

}

main()
