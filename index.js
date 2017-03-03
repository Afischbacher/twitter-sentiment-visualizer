/**
 * Created by ital- on 2017-03-02.
 */
var express = require("express");

var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
    console.log("Listening app on port 3000! ");
});