
const assert = require('assert')
const allowAuth0IPs = require('../../src/hooks/allow-auth-0-i-ps')

describe('Test /hooks/allow-auth-0-i-ps.unit.test.js', () => {
  // eslint-disable-next-line no-unused-vars
  let contextBefore, contextAfterPaginated,
    // eslint-disable-next-line no-unused-vars
    contextAfter, contextAfterMultiple

  beforeEach(() => {
    contextBefore = {
      type: 'before',
      params: { provider: 'socketio' },
      data: {

      }
    }

    contextAfter = {
      type: 'after',
      params: { provider: 'socketio' },
      result: {

      }
    }

    contextAfterMultiple = {
      type: 'after',
      params: { provider: 'socketio' },
      result: [

      ]
    }

    contextAfterPaginated = {
      type: 'after',
      method: 'find',
      params: { provider: 'socketio' },
      result: {
        data: [

        ]
      }
    }
    contextAfterPaginated.result.total = contextAfterPaginated.result.data.length
  })

  it('Hook exists', () => {
    assert(typeof allowAuth0IPs === 'function', 'Hook is not a function.')
  })

  it('???', () => {
    contextBefore.method = 'create'
    assert(true)

    /*
    allowAuth0IPs()(contextBefore)

    assert.deepEqual(contextBefore.data, {

    })
    */
  })
})
