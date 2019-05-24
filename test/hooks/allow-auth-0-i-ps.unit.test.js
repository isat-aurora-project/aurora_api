
const assert = require('assert')
const SKIP = require('@feathersjs/feathers').SKIP
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

  it('should SKIP following hooks if IP is on the whitelist', async () => {
    contextBefore.method = 'create'
    contextBefore.params.ip = '138.91.154.99'
    const res = await allowAuth0IPs()(contextBefore)
    assert(res === SKIP, 'SKIP was not returned')
  })

  it('should **not** SKIP following hooks if IP is not on the whitelist', async () => {
    contextBefore.method = 'create'
    contextBefore.params.ip = '138.91.154.100'
    const res = await allowAuth0IPs()(contextBefore)
    assert(res === contextBefore, 'SKIP was returned when we should have gotten context')
  })
})
