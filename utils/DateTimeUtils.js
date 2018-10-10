let moment = require('moment');
let mtz = require('moment-timezone');

let DefaultTz = 'Asia/Kolkata';

let DateTimeUtils = {

  getCurrentDateTimeMysql: function() {
    return moment().tz(DefaultTz).format('YYYY-MM-DD hh:mm:ss');
  },

  getCurrentDateTimeISO: function() {
    return moment().tz(DefaultTz).format();
  },

  getCurrentTimeString: function(){
	return (new Date()).toGMTString();
  }
}

module.exports = DateTimeUtils;