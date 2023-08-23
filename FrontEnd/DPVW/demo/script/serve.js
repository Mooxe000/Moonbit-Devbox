import { Hono } from 'https://deno.land/x/hono/mod.ts'
import { serveStatic } from 'https://deno.land/x/hono/middleware.ts'

const app = new Hono()

const baseDir = './build'
// const baseDir = './base'
const staticDir = `${baseDir}/assets`

// app.get('/', c => c.text('You can access: /static/hello.txt'))
app.get('/', serveStatic({ path: `${baseDir}/index.html` }))

// app.use('/favicon.ico', serveStatic({ path: `${staticDir}/favicon.ico` }))
// app.use('/static/*', serveStatic({ root: staticDir }))
app.get(
  '/static/*'
, serveStatic({
    root: './'
  , rewriteRequestPath: (path) => path.replace(/\/static/, staticDir)
  })
)

app.get('*', serveStatic({ path: `${baseDir}/index.html` }))

Deno.serve(app.fetch)
