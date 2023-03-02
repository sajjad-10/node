/*
 * Modules path
 * it's native node modules.
 */
const path = require("path");

let parsedPath = path.parse(__filename);

console.log(parsedPath);
