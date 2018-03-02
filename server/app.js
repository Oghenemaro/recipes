import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import http from 'http';

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

// Setup a default catch-all route that sends back a welcome message in JSON format.
require('./routes/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;