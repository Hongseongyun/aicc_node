const { Pool } = require('pg'); //postgres 모듈 저장
const dotenv = require('dotenv').config();

// 연결정보
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

module.exports = { pool };
