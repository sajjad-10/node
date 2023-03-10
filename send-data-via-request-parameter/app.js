const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello express");
}); // Every time requested to this rout ( / ) run function -- localhost:3000/

app.get("/api/users", (req, res) => {
    console.log(req.query);
    res.send([
        { id: 1, name: "user1" },
        { id: 2, name: "user2" },
    ]);
}); // -- localhost:3000/api/users -- for query string : localhost:3000/api/users?status=online&sort=date

app.get("/api/users/:id", (req, res) => {
    // console.log(req.params);
    res.send({ id: req.params.id, name: `user${req.params.id}` });
}); // -- localhost:3000/api/users/2

const port =  3000;
app.listen(port, () => console.log(`Listening on port ${port}`)); // create web server

/*
 * run web server : node app
 * in browser :
 * * localhost:3000/
 * * localhost:3000/api/user
 */
