'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('DashboardCtrl', function($scope, $state) {

    $scope.$state = $state;

  })
  .controller('MainController', ['$scope', 'DataFactory', function($scope, DataFactory) {
    $scope.products = [];
    $scope.toggles = [];
    DataFactory.getData().then(function(json) {
      $scope.products = json;
      angular.forEach($scope.products, function(value, key) {
        ($scope.products[key].shop == 1) ? $scope.toggles.push('-') : $scope.toggles.push('+');
      });
    });
    $scope.add = function(index) {
    	console.log($scope.products[index].shop);
      if ($scope.toggles[index] == "+"){
        $scope.toggles[index] = "-";
        $scope.products[index].shop = 1;
      }
      else {
        $scope.toggles[index] = "+";
        $scope.products[index].shop = 0;
      }
      console.log($scope.products[index].shop);
  	};
  	$scope.valid = function(products) {
      console.log('test');
    	DataFactory.postData(products).then(function(){
        console.log("Validate");
      });
  	};
  }]);
