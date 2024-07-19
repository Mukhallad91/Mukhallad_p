// src/db/connection.js
require('dotenv').config();
const oracledb = require('oracledb');

// Enable Thick mode
oracledb.initOracleClient({ libDir: process.env.OCI_LIB_DIR });

async function initialize() {
  try {
    await oracledb.createPool({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DATABASE_URL
    });

    console.log('Connection pool started');
  } catch (err) {
    console.error('Error creating connection pool', err);
  }
}

async function close() {
  try {
    await oracledb.getPool().close(0);
    console.log('Connection pool closed');
  } catch (err) {
    console.error('Error closing connection pool', err);
  }
}

module.exports = {
  initialize,
  close
};
