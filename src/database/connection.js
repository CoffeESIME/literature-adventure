const sql = require("mssql");
require('dotenv').config();

const dbsettings = {
  user: process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  server: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  options: {
    trustServerCertificate: true,
  },
};

const getConnection = async () => {
  try {
    const pool = await sql.connect(dbsettings);
    return pool;
  } catch (error) {
    console.log(error);
  }
}

module.exports = getConnection;