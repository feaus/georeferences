const express = require('express');

const constants = require('./config/constants');
const router = require('./routes/routes');


const app = express();
const port = constants.app.port;

app.use(`${constants.prefix}`, router);

app.listen(port, () => console.log(`Listening on port ${port}...`));