const getConnection = require("../database/connection.js");
const sql= require('mssql');

const getBooks = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(
        "SELECT TITLE, PRICE, STOCK, AUTHOR  FROM [dbo].[vw_book_author]"
      );
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addBook = async (req, res) => {
  const {name, description, price, stock, author } = req.body;
  console.log(name, description, price, stock,  author);
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.VarChar, description)
      .input("price", sql.Float, price)
      .input("stock", sql.Int, stock)
      .input("author", sql.VarChar, author )
      .query(
        "INSERT INTO [libreria_esau].[dbo].[vw_book_author] ([TITLE],[DESCRIPTION],[PRICE],[STOCK],[AUTHOR]) VALUES (@name,  @description, @price, @stock, @author)"
      );
      console.log(result)
    res.json({ "rowAffected": result.rowsAffected });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
  
};

const addAuthor = async (req, res) => {
  const {name, nationality } = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("nationality", sql.VarChar, nationality)
      .query(
        "INSERT INTO [libreria_esau].[dbo].[authors] ([NAME],[NATIONALITY]) VALUES (@name,  @nationality)"
      );
      console.log(result)
    res.json({ "rowAffected": result.rowsAffected });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
  
};

const getAuthors = async (req,res)=>{
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query('SELECT [ID_AUTHOR],[NAME] FROM [libreria_esau].[dbo].[authors]'
      );
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error)
  }
}


module.exports ={
    getBooks, 
    addBook,
    addAuthor,
    getAuthors
}