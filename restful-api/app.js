const express = require("express");
const app = express();
let users = require("./users");

/* * get all users */
app.get("/api/users", (req, res) => {
    res.json({
        data: users,
        massage: "data send ( OK )",
    });
}); // localhost:3000/api/users

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`)); // create web server