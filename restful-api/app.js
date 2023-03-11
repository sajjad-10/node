const express = require("express");
const app = express();
let users = require("./users");

app.use(express.json()); // express be default can not pares body

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
    if (!user) {
        return (
            res.status(404), // set status code -- can see dev tools network.
            res.json({
                data: null,
                massage: "The user with th given id was not found.",
            })
        );
    } // if not find user
    res.json({
        data: user,
        massage: "data send ( OK )",
    });
}); // localhost:3000/api/users/12

/* * send data -- post methods */
app.post("/api/users/:id", (req, res) => {
    console.log(req.body);
    res.send("Developing ...");
    users.push({ id: users.length + 1, ...req.body });
    res.jsonp({
        data: users,
        message: "data send ( OK )",
    });
}); // localhost:3000/api/users/12
/*
* data to send :
*    {
        "id": 13,
        "email": "rachelt.howell@reqres.in",
        "first_name": "Sajjad",
        "last_name": "SajjadF",
        "avatar": "https://reqres.in/img/faces/12-image.jpg"
    },
*/

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`)); // create web server
