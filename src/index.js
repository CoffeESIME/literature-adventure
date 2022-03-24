const express = require("express");
const morgan = require("morgan");
const cors = require('cors');

const clientsRouter = require('./routes/client.routes');
const employeesRouter = require('./routes/employee.routes');

const app = express();

const port = process.env.APP_PORT;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(clientsRouter);
app.use(employeesRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

