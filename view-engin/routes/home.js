const express = require("express");
const router = express.Router();

/* * Home page */
router.get("/", (req, res) => {
    res.render("home", { name: "sajjad" });
}); // localhost:3000/

module.exports = router;
