/* eslint func-names: "off" */
require('dotenv').config();
const mongoose = require('mongoose');

module.exports = function () {
  const mongoconnectionlink = process.env.MONGODB_URL;

  mongoose.connect(
    mongoconnectionlink,
    { useUnifiedTopology: true },
  );
  mongoose.connection.once('open', () => {
    console.log(`Connected to MongoDB [CLIENT ENVIRMOMENT]: ${process.env.NODE_ENV}`);
  }).on('error', (error) => {
   console.log('Connection error:', error);
  });
}; 

