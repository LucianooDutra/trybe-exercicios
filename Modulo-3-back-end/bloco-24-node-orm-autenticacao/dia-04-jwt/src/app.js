const express = require('express');
const { exercicioRouter } = require('./routers');

const app = express();

app.use(express.json());

app.use('/exercicio', exercicioRouter);

module.exports = app;