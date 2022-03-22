const getConnection = require("../database/connection.js");
const sql= require('mssql')
const getClients = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(
        "SELECT [ID_CLIENT],[NAME],[PHONE],[ADDRESS] FROM [libreria_esau].[dbo].[client]"
      );
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error);
  }
  
};

const addClients = async (req, res) => {
  const {name, telephone, address } = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("telephone", sql.VarChar, telephone)
      .input("address", sql.VarChar, address)
      .query(
        "INSERT INTO [libreria_esau].[dbo].[client] ([NAME],[PHONE],[ADDRESS]) VALUES (@name,  @telephone, @address)"
      );
      console.log(result)
    res.json({"rowAffected":result.rowsAffected});
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
  
};

module.exports = {getClients, addClients};