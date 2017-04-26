/**
 * Created by Andre Fischbacher
 */
var app = angular.module("app",['ngAnimate']);

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);