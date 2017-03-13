/**
 * Created by ital- on 2017-03-02.
 */
app.controller("main-ctrl", ["$scope","$http", function ($scope, $http) {
    $scope.title = "Twitter Sentiment Visualizer";
    $scope.results = [];


    $scope.getResponse = function () {
        $http.get("/results/?q="+$scope.searchInput).then(function (data) {
            $scope.results = data.data;
        });
    }
}]);