import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

// Read data from JSON file, this will set db.data content
await db.read()

db.defaults({
  users: []
}).write();

// If file.json doesn't exist, db.data will be null
// Set default data
db.data ||= { users: [] }

const { users } = db.data
posts.push({
  "name": "bob",
  "email": "b@gmail.com",
  "phone": "32354646",
  "id": "eede49d8-d28e-4194-b532-288ba5b89985"
})

// Write db.data content to db.json
await db.write()

console.log(db.read())

export default db;
