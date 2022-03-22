const sql = require("mssql");

const dbsettings = {
  user: "training",
  password: "Database24$",
  server: "GDL-LAP-295",
  database: "libreria_esau",
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