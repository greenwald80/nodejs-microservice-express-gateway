const path = require("path");
const gateway = require("express-gateway");
// import "./user";
// import "./music";
require("./user");
require("./music");


gateway().load(path.join(__dirname, "config")).run();
