const express = require('express');
const app = express();

app.use(express.json());

app.use('/anime', require('./src/anime/anime.routes'));
app.use('/review', require('./src/review/review.routes'));

module.exports = app;