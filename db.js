const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "dvdrental",
  password: "mooamir90",
  port: 5432,
});

module.exports = pool;
