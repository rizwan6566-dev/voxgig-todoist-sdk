
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { VoxgigTodoistSdkSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = VoxgigTodoistSdkSDK.test()
    equal(testsdk instanceof VoxgigTodoistSdkSDK, true,
      'VoxgigTodoistSdkSDK.test() must return a client synchronously')
  })

})
