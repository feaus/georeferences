const constants = require('./config/constants');
const express = require('express');


const app = express();

app.get(`${constants.prefix}/health`, (req, res) => {
    res.send({message: 'Running', version: '1.0.0'});
});

app.get(`${constants.prefix}/api/countries`, (req, res) => {
    res.send([1, 2 ,3]);
});


const port = constants.app.port;

app.listen(port, () => console.log(`Listening on port ${port}...`));