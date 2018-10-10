'use strict';

let Response = {

  success : function (res, data, statusCode) {
    statusCode = statusCode || 200;
    let responseObj = {
      code : statusCode,
      message: 'Successfully Done!!',
      data: data
    };
    return res.status(statusCode).json(responseObj);
  },

  error : function (res, error, statusCode=500, errorMessage="Oops! Some error occurred") {
    console.log("Error log: ", (error && error.stack) ? error.stack : 'None');
    statusCode = statusCode;
    let responseObj = {
      code : statusCode,
      message: errorMessage
    };
    return res.status(statusCode).json(responseObj);
  }


};




module.exports = Response;
