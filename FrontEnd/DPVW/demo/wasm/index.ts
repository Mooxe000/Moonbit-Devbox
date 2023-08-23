export * from './node_modules/asdom/assembly/glue'

import {document} from './node_modules/asdom/assembly'

const el = document.createElement('h1')

el.setAttribute('foo', 'bar')

const s: string = el.getAttribute('foo')! // returns "bar"

el.innerHTML = /*html*/ `
  <span style="font-weight: normal; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
    <em>hello</em> from <strong>AssemblyScript</strong>
  </span>
`

document.body!.appendChild(el)
