var express = require("express");
var twitter = require("twitter");
var dotenv = require("dotenv");

dotenv.config();
var app = express();

var twitterApi = new twitter({
    consumer_key: process.env.Consumer_Key_Twitter,
    consumer_secret: process.env.Consumer_Secret_Twitter,
    access_token_key: process.env.Access_Token_Twitter,
    access_token_secret: process.env.Access_Token_Secret_Twitter
});

app.use(express.static('public'));

app.get('/results/', function (req, res) {
    var array = [];
    array.push(req.query.q);
    res.send(JSON.stringify(array));
});


app.listen(3000, function () {
    console.log("Listening app on port 3000! ");
});

