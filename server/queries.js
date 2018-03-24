const promiseLib = require('bluebird')
const options = { promiseLib }

const pgp = require('pg-promise')(options)
const connectionString = 'postgres://localhost:3000'
const db = pgp(connectionString)
