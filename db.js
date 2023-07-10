import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'sunbeam',
  password: 'sunbeam',
  database: 'empdb',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
})

export {pool}