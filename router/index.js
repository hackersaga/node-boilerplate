'use strict';

module.exports = function (app) {
  app.use('/api/test', require('../app/commons'));
};
