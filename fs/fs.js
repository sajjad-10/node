/*
 * Modules fs
 * it's native node modules.
 */
const fs = require("fs");
/*
 * readdir
 * Blocking
 * noneBlocking
 */
const filesB = fs.readdirSync("./"); // type -> blocking methods
console.log("blocking --->", filesB);


fs.readdir("./", (err, files) => {
    console.log("none-blocking --->", files);
}); // type -> noneBlocking methods

fs.readdir("./something-rung", (err, files) => {
    console.log("none-blocking e --->", err);
}); // type -> noneBlocking methods
