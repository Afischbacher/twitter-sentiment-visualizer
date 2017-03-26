/**
 * Created by ital- on 2017-03-02.
 */
app.controller("main-ctrl", ["$scope", "$http", function ($scope, $http) {
    $scope.title = "Twitter Sentiment Visualizer";

    $scope.getResponse = function () {
        $http.get("/results/" + $scope.searchInput).then(function (data) {

            var scores = data.data;
            var finalScores = [scores["Very Negative"], scores["Negative"], scores["Neutral"], scores["Positive"], scores["Very Positive"]];
            var canvas = document.getElementById('tweet-chart'),
                ctx = canvas.getContext('2d'),
                startingData = {
                    labels: ["Very Negative", "Negative", "Neutral", "Positive", "Very Positive"],
                    datasets: [
                        {
                            fillColor: "rgba(10,255,25,0.3)",
                            strokeColor: "rgba(220,220,220,1)",
                            pointColor: "rgba(220,220,220,1)",
                            pointStrokeColor: "#fff",
                            data: finalScores
                        }
                    ]
                };

            var tweetChart = new Chart(ctx).Line(startingData, {animationSteps: 50});

        });
    };
}]);