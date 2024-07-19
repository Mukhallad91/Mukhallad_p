// testDbConnection.js
const db = require('./src/db/connection');
const oracledb = require('oracledb');

async function testConnection() {
  try {
    await db.initialize();

    const connection = await oracledb.getConnection();
    const result = await connection.execute('SELECT 1 + 1 AS solution FROM dual');
    console.log('The solution is:', result.rows[0][0]);

    await connection.close();
  } catch (err) {
    console.error('Error testing the database connection', err);
  } finally {
    await db.close();
  }
}

testConnection();
