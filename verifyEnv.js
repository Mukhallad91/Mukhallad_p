/*
// Load environment variables from .env file
require('dotenv').config();

// Print the value of DATABASE_URL to verify it's loaded correctly
console.log('DATABASE_URL:', process.env.DATABASE_URL);

*/

// verifyEnv.js
require('dotenv').config();
const path = require('path');
const fs = require('fs');

console.log('.env file path:', path.resolve('.env'));
console.log('Does .env file exist:', fs.existsSync(path.resolve('.env')));
console.log('Environment Variables:', process.env);
console.log('URL:', process.env.URL);
console.log('USERNAME:', process.env.USERNAME);
console.log('PASSWORD:', process.env.PASSWORD);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DATABASE_URL:', process.env.DATABASE_URL);
console.log('OCI_LIB_DIR:', process.env.OCI_LIB_DIR);
