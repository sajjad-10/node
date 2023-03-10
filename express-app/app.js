const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello express");
}); // Every time requested to this rout ( / ) run function -- localhost:3000/

app.get("/api/user", (req, res) => {
    res.send([
        { id: 1, name: "user1" },
        { id: 2, name: "user2" },
    ]);
}); // -- localhost:3000/api/user

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`)); // create web server

/*
 * run web server : node app
 * in browser :
 * * localhost:3000/
 * * localhost:3000/api/user
 */
