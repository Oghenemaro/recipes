const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const express_app = express();

express_app.set('port', process.env.PORT || 8000);

// Log requests to the console.
express_app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
express_app.use(bodyParser.json());
express_app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
express_app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));


express_app.listen(express_app.get('port'), () => {
    console.log('Api running at '+express_app.get('port'));
});


module.exports = express_app;