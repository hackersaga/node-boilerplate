'use strict';

let request_logger = require('./requestLogger');
let cors = require('./cors');
let morgan = require('morgan');
let bodyParser = require("./bodyParser")
module.exports = {
	logger : request_logger,
	cors : cors,
	bodyParser: bodyParser
  // morgan: morgan('combined')
};