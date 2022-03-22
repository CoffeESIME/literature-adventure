const express = require("express");
const morgan = require("morgan");
const cors = require('cors');

const clientsRouter = require('./routes/client.routes');

const app = express();
const port = 3000;

app.use(clientsRouter);
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

