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

/* * get one user -- params */
app.get("/api/users/:id", (req, res) => {
    const user = users.find((u) => {
        return u.id === parseInt(req.params.id);
    });
    console.log(user);
    if (!user) {
        return res.json({
            data: null,
            massage: "The user with th given id was not found.",
        });
    } // if not find user
    res.json({
        data: user,
        massage: "data send ( OK )",
    });
}); // localhost:3000/api/users/12

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`)); // create web server
