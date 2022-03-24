const getConnection = require("../database/connection.js");
const sql= require('mssql');

const getEmployees = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(
        "SELECT [ID_EMPLOYEE],[NAME],[PHONE],[ADDRESS],[SALARY] FROM [libreria_esau].[dbo].[employee]"
      );
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {getEmployees};