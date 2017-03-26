/*
 By: Andre Fischbacher
 Date: 2017-03-17
 */

var twitterAnalysis = function () {
    var async = require('async');
    var twitter = require("twitter");
    var dotenv = require("dotenv");
    var sentiment = require("sentiment");

    dotenv.config();

    var twitterApi = new twitter({
        consumer_key: process.env.Consumer_Key_Twitter,
        consumer_secret: process.env.Consumer_Secret_Twitter,
        access_token_key: process.env.Access_Token_Twitter,
        access_token_secret: process.env.Access_Token_Secret_Twitter
    });


    this.getTwitterHashTagData = function (query, callback) {
        var dataScore = {"Very Negative": 0, "Negative": 0, "Neutral": 0, "Positive": 0, "Very Positive": 0};
        var sum = 0;

        twitterApi.get("search/tweets", {q: query, lang: "en"}, function (error, tweets, response) {
            var twitterData = [];

            if (error) callback(error);

            async.each(tweets.statuses, function (item, callEach) {
                twitterData.push(item.text);
                var sentScore = sentiment(item.text, function (err, data) {
                    if(data.score < -6 ){
                        dataScore["Very Negative"] += 1;
                    }
                    else if(data.score >= -5 && data.score < 0){
                        dataScore["Negative"] += 1;
                    }
                    else if (data.score == 0 ){
                        dataScore["Neutral"] += 1;
                    }
                    else if (data.score > 0 && data.score <= 2){
                        dataScore["Positive"] += 1;
                    }
                    else {
                        dataScore["Very Positive"] += 1;
                    }

                    callEach(); // decrementing by 1 until the length of the array is completed for the tweets.statuses
                });

            }, function () {
                callback(null, dataScore, twitterData);


            });

        });
    };
};

module.exports = twitterAnalysis;