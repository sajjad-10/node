/*
 * How NodeJS works -Modules
 * Wrapper All js-code in file  white this function
 * parameter :
 * * exports: it's pointer simple white -> module.exports (exports Contains the address object module.exports )
 * * ...
 */
(function (exports, require, module, __filename, __dirname) {
    // entire module code lives in here - a
    function addition(a, b) {
        return a + b;
    }
    exports.addition = addition;
});

console.log("__filename", __filename);
console.log("__dirname", __dirname);