const express = require('express');
const app = express();

app.use(express.json());

app.use('/anime', require('./src/anime/anime.routes'));

module.exports = app;