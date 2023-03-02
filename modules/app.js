/*
 * what is module: it's a object in any file js = (module).
 * get data about modules
 */

// console.log(module);

/*
 * Import Items
 * call folder address
 */
const addition = require("./calculator"); // if in Export use syntax 1
const calculator = require("./calculator"); // or in destructuring {addition, subtraction}
// console.log(addition(8, 2));
// console.log(calculator); // out put export object.
// console.log(calculator.addition(8, 2)); // put put: 10
