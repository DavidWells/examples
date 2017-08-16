'use strict';

module.exports = function currentTime(context, cb) {
  cb(null, {
    message: `Hello, the current time is ${new Date().toTimeString()}.`,
  });
};
