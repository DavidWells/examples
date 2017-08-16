'use strict';

// Note that the function is the default export of file
module.exports = function cronExample(context, cb) { // eslint-disable-line
  const time = new Date();
  console.log(`Your cron function "${context.functionName}" ran at ${time}`);
};
