'use strict';

let Promise = require('bluebird');
let pool = global.pool;

function getSqlConnection() {
  return pool.getConnectionAsync().disposer(function (connection) {
    connection.release();
  });
}

function querySql(query, params) {
  return Promise.using(getSqlConnection(), function (connection) {
    if (typeof params !== 'undefined'){
      return connection.queryAsync(query, params);
    } else {
      return connection.queryAsync(query);
    }
  });
};

module.exports = {
  getSqlConnection: getSqlConnection,
  querySql: querySql
};