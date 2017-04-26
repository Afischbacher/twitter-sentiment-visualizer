/**
 * Created by Andre Fischbacher
 */
var app = angular.module("app",[]);

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);