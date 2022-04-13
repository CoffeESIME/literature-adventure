const getConnection = require("../database/connection.js");
const sql= require('mssql');

const getBooks = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(
        "SELECT Books.ID_BOOK, Books.NAME as TITLE, PRICE, STOCK, Author.[NAME] as AUTHOR  FROM dbo.books as Books JOIN dbo.authors as Author ON Books.ID_AUTHOR = Author.ID_AUTHOR"
      );
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addBook = async (req, res) => {
  const {name, description, price, stock, id_author } = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.VarChar, description)
      .input("price", sql.Float, price)
      .input("stock", sql.Int, stock)
      .input("id_author", sql.Int, id_author )
      .query(
        "INSERT INTO [libreria_esau].[dbo].[books] ([NAME],[DESCRIPTION],[PRICE],[STOCK],[ID_AUTHOR]) VALUES (@name,  @description, @price, @stock, @id_author)"
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


module.exports ={
    getBooks, 
    addBook,
    addAuthor
}