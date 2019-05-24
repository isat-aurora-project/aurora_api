
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const SKIP = require('@feathersjs/feathers').SKIP

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {

  // Return the actual hook.
  return async (context) => {
    // the list of Auth0 IP addresses
    const whitelist = [
      '138.91.154.99',
      '54.183.64.135',
      '54.67.77.38',
      '54.67.15.170',
      '54.183.204.205',
      '54.173.21.107',
      '54.85.173.28',
      '35.167.74.121',
      '35.160.3.103',
      '35.166.202.113',
      '52.14.40.253',
      '52.14.38.78',
      '52.14.17.114',
      '52.71.209.77',
      '34.195.142.251',
      '52.200.94.42'
    ]
    // if the current IP is on the whitelist...
    if (whitelist.includes(context.params.ip)) {
      // skip the rest of the hooks
      return SKIP
    }
    // Best practice: hooks should always return the context.
    return context
  }
}

// Throw to reject the service call, or on an unrecoverable error.
// eslint-disable-next-line no-unused-vars
function error(msg) {
  throw new Error(msg)
}