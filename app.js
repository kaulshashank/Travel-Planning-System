var app = angular.module('myApp', []);
var api_key = "qg440drq";
app.controller('myController', function($scope, $http) {
    $scope.orig = "";
    $scope.dest = "";
    $scope.mm = "";
    $scope.dd = "";
    $scope.trains= [];
    $scope.Submit = function() {
      if($scope.mode == "TRAIN") {
        $http.get('http://api.railwayapi.com/between/source/'+$scope.orig+'/dest/'+$scope.dest+'/date/'+$scope.dd+'-'+$scope.mm+'/apikey/'+api_key+'/')
        .success(function(data, status) {     
          $scope.trains = data;
          console.log(JSON.stringify(data));
        })
        .error(function(data, status) {
          console.log("some error");
        });
      }
    }
});

