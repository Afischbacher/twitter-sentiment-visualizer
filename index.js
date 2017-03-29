/*
 By: Andre Fischbacher
 Date: 2017-03-17
 */

var express = require("express");
var twitterAnalysisInstance = require("./twitterAnalysis.js");

var app = express();
var twitter = new twitterAnalysisInstance();
var score;

app.use(express.static('public'));

app.get('/results/:query', function (req, res) {

    twitter.getTwitterHashTagData(req.params.query, function (error, data) {
        res.end(JSON.stringify(data));

    });

});

var port = process.env.PORT || 3000;
app.listen( port, function () {
    console.log("Listening to the app on port" + port);
});

