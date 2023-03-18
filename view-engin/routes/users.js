const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
let users = require("../users");

/* * get all users */
router.get("/", (req, res) => {
    res.json({
        data: users,
        massage: "data send ( OK )",
    });
}); // localhost:3000/api/users

/* * get one user -- params -- Middleware-2 */
router.get("/:id", (req, res) => {
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

/* * send data -- post methods -- Middleware-3 */
router.post(
    "/",
    [
        body("email", "email must be valid").isEmail(),
        body("first_name", "first_name can't be empty").notEmpty(),
        body("last_name", "last_name can't be empty").notEmpty(),
    ],
    (req, res) => {
        const errors = validationResult(req);
        console.log(errors.isEmpty(), "errors.isEmpty()");
        if (!errors.isEmpty()) {
            return res.status(400).json({
                data: null,
                errors: errors.array(),
                message: "validation error",
            });
        }
        res.send("Developing ...");
        users.push({ id: users.length + 1, ...req.body });
        res.json({
            data: users,
            message: "data send ( OK )",
        });
    }
); // localhost:3000/api/users

/* * update data -- post methods -- Middleware-4 */
router.put(
    "/:id",
    [
        body("email", "email must be valid").isEmail(),
        body("first_name", "first_name can't be empty").notEmpty(),
        body("last_name", "last_name can't be empty").notEmpty(),
    ],
    (req, res) => {
        const user = users.find((user) => user.id == req.params.id);
        if (!user) {
            return res.status(404).json({
                data: null,
                message: "the user with the give id was not found",
            });
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                data: null,
                errors: errors.array(),
                message: "validation error",
            });
        }
        users = users.map((user) => {
            if (user.id == req.params.id) {
                return { ...user, ...req.body };
            }
            return user;
        });
        res.json({
            data: users,
            message: "data send ( OK )",
        });
    }
); // localhost:3000/api/users

/* * delete data -- delete methods -- Middleware-5 */
router.delete("/:id", (req, res) => {
    const user = users.find((user) => user.id == req.params.id);

    if (!user) {
        return res.status(404).json({
            data: null,
            message: "the user with the give id was not found",
        });
    }

    const index = users.indexOf(user);
    users.splice(index, 1);
    res.json({
        data: users,
        message: "data send ( OK )",
    });
});

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

module.exports = router;
