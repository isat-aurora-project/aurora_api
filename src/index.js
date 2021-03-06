
/* eslint-disable no-console */
// Start the server. (Can be re-generated.)
// !code: preface // !end
const logger = require('./logger')
const app = require('./app')
// !code: imports
const fs = require('fs')
const https = require('https')
// !end
// !code: init // !end

const port = app.get('port')
let server
if (process.env.NODE_ENV !== 'production') {
  server = https.createServer({
    key: fs.readFileSync('./api.aurora.test-key.pem', 'utf8'),
    cert: fs.readFileSync('./api.aurora.test.pem', 'utf8')
  }, app)
  server.listen(port)
  app.setup(server)  // see: https://docs.feathersjs.com/api/express.html#https
} else {
  server = app.listen(port)
}
// !code: init2 // !end

process.on('unhandledRejection', (reason, p) => {
  // !<DEFAULT> code: unhandled_rejection_log
  logger.error('Unhandled Rejection at: Promise ', p, reason)
  // !end
  // !code: unhandled_rejection // !end
})

server.on('listening', async () => {
  // !code: listening_log
  logger.info('Aurora API application started on http://%s:%d', app.get('host'), port)
  // !end
  // !code: listening // !end
  // !code: listening1 // !end
})

// !code: funcs // !end
// !code: end // !end
