var express = require("express");

var app = express();

app.use(express.static('public'));

app.get('/results/', function (req, res) {
    var array = [];
    array.push(req.query.q);
    res.send(JSON.stringify(array));
});
app.listen(3000, function () {
    console.log("Listening app on port 3000! ");
});