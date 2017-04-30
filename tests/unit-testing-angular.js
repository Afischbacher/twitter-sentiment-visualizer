describe("Testing Data", function () {
   it("",function () {
       var $scope = {};
       var controller = $controller('main-ctrl',{$scope: $scope});

       expect($scope.tweets).not().toBe().null()
   }) 
});