const express = require("express");
const app = express();
const homeRouter = require("./routes/home");
const userRouter = require("./routes/users");

const config = require("config");
const debug = require("debug")("app:main");
const dbdebug = require("debug")("app:db");
app.use(express.json()); // express be default can not pares body -- Middleware-1
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // localhost:3000/image.jpeg

// Ejs
app.set("view engine", "ejs"); // Introducing View Engin
app.set("views", "./view"); // Introducing files View - By default this is the same = views

/* * Home page */
app.use("/", homeRouter);

/* * Users page */
app.use("/api/users", userRouter);

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`)); // create web server
