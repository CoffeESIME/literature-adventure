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

const addEmployee = async (req, res) => {
  const {name, telephone, address, salary } = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("phone", sql.VarChar, telephone)
      .input("address", sql.VarChar, address)
      .input("salary", sql.Float, salary)
      .query(
        "INSERT INTO [libreria_esau].[dbo].[employee] ([NAME],[PHONE],[ADDRESS],[SALARY]) VALUES (@name,  @phone, @address, @salary)"
      );
      console.log(result)
    res.json({ "rowAffected": result.rowsAffected });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
  
};

module.exports = {getEmployees, addEmployee};