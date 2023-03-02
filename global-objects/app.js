/*
 * in browser
 */
// console.log(window.console.log("in Browser"));//get Error - become node doesn't have window

/*
 * in node
 */
// console.log(global.console.log("in Node"));

let hello = "Hello from Node.js";
let justNode = hello.slice(11);

console.log(global.hello); // get --undefined-- for the scope
console.log(justNode);
