const express = require("express");
const morgan = require("morgan");
const cors = require('cors');

const clientsRouter = require('./routes/client.routes');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(clientsRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

