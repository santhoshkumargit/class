var express = require("express");
var app = express();
app.use(express.static(__dirname + "/design"))
app.listen("9999", function(err) {
    if (err) {
        console.log("port not working");
    } else {
        console.log("port working on 9999");
    }

});