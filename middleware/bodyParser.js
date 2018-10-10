let bodyParser = require('body-parser');

module.exports = bodyParser.json({
  extended: true,
  limit: '15mb',
  parameterLimit: '20000'
})