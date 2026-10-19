/*
 * Run after `cd ts && npm install && npm run build`:
 *   TODOIST_API_TOKEN=... node examples/basic.cjs
 */
const { VoxgigTodoistSdkSDK } = require('../ts/dist/VoxgigTodoistSdkSDK.js')

const token = process.env.TODOIST_API_TOKEN

if (!token) {
  throw new Error('Set TODOIST_API_TOKEN before running this example.')
}

const client = new VoxgigTodoistSdkSDK({ apikey: token })

async function list(path, query) {
  const result = await client.direct({ path, method: 'GET', query })
  if (!result.ok) {
    throw new Error(`Todoist request failed (${result.status ?? 'network'}): ${String(result.err ?? result.data)}`)
  }
  return result.data
}

async function main() {
  // Representative authenticated REST endpoints.
  const projects = await list('/api/v1/projects', { limit: 10 })
  const tasks = await list('/api/v1/tasks', { limit: 10 })

  console.log('Projects:', projects)
  console.log('Tasks:', tasks)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
