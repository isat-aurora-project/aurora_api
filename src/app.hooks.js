
// Application hooks that run for every service. (Can be re-generated.)
const commonHooks = require('feathers-hooks-common')
// !code: imports
const log = require('./hooks/log')
// import the skipIfFromAuth0 hook
const skipIfFromAuth0 = require('./hooks/allow-auth-0-i-ps')
// import the authorize hook
const { authorize } = require('@morphatic/feathers-auth0-authorize-hook')() // <-- note the parentheses
// !end

// !code: used
// eslint-disable-next-line no-unused-vars
const { isProvider, unless } = commonHooks
// !end
// !code: init // !end

let moduleExports = {
  before: {
    // !code: before
    all: [
      log(),
      skipIfFromAuth0(),
      unless(isProvider('server'), authorize)
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
    // !end
  },

  after: {
    // !<DEFAULT> code: after
    all: [ log() ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
    // !end
  },

  error: {
    // !<DEFAULT> code: error
    all: [ log() ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
    // !end
  },
  // !code: moduleExports // !end
}

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
