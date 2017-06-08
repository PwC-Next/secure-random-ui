var secureRandomApp = angular.module('securerandomui', ['ngRoute']);

secureRandomApp.config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/hashes',{
       templateUrl: '/templates/hashes/index.html',
       controller: 'HashListCtr'
    });
    $routeProvider.otherwise({
      redirectTo: '/hashes'
    });
  }
]);

secureRandomApp.controller("HashListCtr", ['$scope', '$http', function($scope, $http) {
  $scope.form_data = {};

  $scope.process_form = function() {
    $http.post('get_hashes.json', $scope.form_data).then(function(response) {
      console.log(response.data);
      $scope.hashes = response.data;
    });
  };

}]);
