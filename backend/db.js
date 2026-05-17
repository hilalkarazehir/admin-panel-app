const { Pool } = require("pg")

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "smartspirit_db",
  password: "hilal1234",
  port: 5432,
})

module.exports = pool