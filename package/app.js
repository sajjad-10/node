/*
 * in terminal type npm init
 * install third party npm package
 *  * for example: jalali-moment
 */
const moment = require("jalali-moment");
const outPut = moment(new Date()).locale('fa').format('YYYY/MM/DD');

console.log(outPut); // node app.js