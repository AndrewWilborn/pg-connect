import pg from 'pg';
const { Client } = pg;

import connectionString from './creds.js'

const client = new Client({
  connectionString,
})

await client.connect()

const res = await client.query('SELECT * FROM customers')
console.log(res.rows)

await client.end()