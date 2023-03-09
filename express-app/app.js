const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello express");
}); // Every time requested to this rout ( / ) run function

app.listen(3000, () => console.log("Listening on port 3000")); // create web server

/*
 * run web server : node app
 * in browser : node app
 */
