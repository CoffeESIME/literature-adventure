const getConnection = require("../database/connection.js");

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

module.exports = getClients;