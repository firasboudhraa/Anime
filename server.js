require('dotenv').config();
const app = require('./App');
const connectToDatabase = require('./database/database');

connectToDatabase() ;


const port = process.env.PORT_CLIENT || 3000;
const server = require('http').createServer(app);

server.listen(port, () => {
  console.log(`Client Server started on port ${port}`);
});


module.exports = server;