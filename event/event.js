/*
 * Modules event
 * it's native node modules.
 */
const EventEmitter = require("events"); // out put is Class.
const emitter = new EventEmitter(); // create object.

emitter.on("bell", (e) => {
    console.log("Open the door.");
    console.log(e); // get parameter.
}); // create event ( Define ).

emitter.emit("bell", { time: Date.now(), count: 2 }); // call event.