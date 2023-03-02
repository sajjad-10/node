function addition(a, b) {
    return a + b;
}
function subtraction(a, b) {
    return a - b;
}
function multiplication(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}
/*
 * Export items
 * 1- add just one item -> in import export object name  == addition
 * 2- add multi line
 * 3- add all in one object
 */
module.exports = addition; // add level 1

// module.exports.addition = addition; //add level 2
// module.exports.subtraction = subtraction;

// module.exports = {
//     addition: addition,
//     subtraction: subtraction,
//     multiplication: multiplication,
//     division: division,
// }; // add level 3

// console.log(module); // can see export item in : module.export
