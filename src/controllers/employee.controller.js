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
  const {name, phone, address, salary } = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("phone", sql.VarChar, phone)
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

const updateEmployee = async (req, res) => {
  const id = req.params.id;
  const { name, phone, address, salary } = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .input("name", sql.VarChar, name)
      .input("phone", sql.VarChar, phone)
      .input("address", sql.VarChar, address)
      .input("salary", sql.Float, salary)
      .query(
        "UPDATE employee SET NAME = @name, PHONE = @phone, ADDRESS = @address, SALARY = @salary WHERE ID_EMPLOYEE = @id  "
      );
      console.log(result)
    res.json({ "rowAffected": result.rowsAffected });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
  
};

const deleteEmployee = async (req, res) => {
  const id = req.params.id;

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query(
        "DELETE FROM employee WHERE ID_EMPLOYEE = @id"
      );
      console.log(result)
    res.json({ "rowAffected": result.rowsAffected });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
  
};

module.exports = {getEmployees, addEmployee, updateEmployee, deleteEmployee};