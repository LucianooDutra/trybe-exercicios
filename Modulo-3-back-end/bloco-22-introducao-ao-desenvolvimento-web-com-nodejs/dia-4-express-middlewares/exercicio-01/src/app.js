const express = require('express');
const activities = require('./routes/activities');

const app = express();

app.use(express.json());

app.use(activities);

module.exports = app;