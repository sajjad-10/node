/*
 * Modules http
 * it's native node modules.
 */
const http = require("http"); // out put is Class.
const server = http.createServer((req, res) => {
    console.log("New connection");
    // console.log(req.url);
    // res.write("response to be");
    // res.end(); // imported for end request
    /*
     * example --> create a simple router :
     */
    if (req.url === "/") {
        res.write("Home page");
    } else if (req.url === "/products") {
        res.write(JSON.stringify({ products: ["products1", "products2"] }));
    } else {
        res.write("not Found");
    }
    res.end();
}); // callback :when user call port

server.listen(3000); //  port

/*
 * for call : ip:port = 127.0.0.1:3000
 * for call -  data about response : 127.0.0.1:3000/products
 */