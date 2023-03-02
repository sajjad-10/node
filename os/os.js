/*
 * Modules os
 * it's native node modules.
 */
const os = require("os");

console.log("free memory",os.freemem());
console.log("total memory",os.totalmem());