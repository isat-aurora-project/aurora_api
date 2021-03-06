
// Hooks for service `keys`. (Can be re-generated.)
const commonHooks = require('feathers-hooks-common')
// !code: imports // !end

// !code: used
// eslint-disable-next-line no-unused-vars
const { disallow } = commonHooks
// eslint-disable-next-line no-unused-vars
const { create, update, patch, validateCreate, validateUpdate, validatePatch } = require('./keys.validate')
// !end

// !code: init // !end

let moduleExports = {
  before: {
    // !code: before
    all: [
      disallow('external')
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
    all: [],
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
    all: [],
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
