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
  .controller('MainController', ['$scope', function($scope) {
    $scope.products = [
    	{
      	name: 'Oxalis #1',
      	price: 129,
        marque: 'Cae',
        categorie: 'Femme - Chemise',
      	/*pubdate: new Date('2014', '03', '08'),*/
      	cover: 'http://www.cae-store.com/wp-content/uploads/2015/06/Chemise-en-jean-devant-femme2-325x600.jpg',
      	/*likes: 0,
      	dislikes: 0*/
    	},
    	{
      	name: 'Oxalis #2',
      	price: 129,
        marque: 'Cae',
        categorie: 'Femme - Chemise',
      	/*pubdate: new Date('2013', '08', '01'),*/
      	cover: 'http://www.cae-store.com/wp-content/uploads/2015/06/chemise-oversize-devant-femme2-325x600.jpg',
      	/*likes: 0,
      	dislikes: 0*/
    	},
    	{
      	name: 'Oxalis #3',
      	price: 129,
        marque: 'Cae',
        categorie: 'Femme - Chemise',
      	/*pubdate: new Date('1999', '07', '08'),*/
      	cover: 'http://www.cae-store.com/wp-content/uploads/2015/07/Chemise-manches-raglan-devant-femme2-e1438266324292-325x600.jpg',
      	/*likes: 0,
      	dislikes: 0*/
    	},
    	{
      	name: 'Chardon #1',
      	price: 159,
        marque: 'Cae',
        categorie: 'Femme - Manteaux',
      	/*pubdate: new Date('2011', '08', '16'),*/
      	cover: 'http://www.cae-store.com/wp-content/uploads/2015/06/Caban-devant-Femme2-325x600.jpg',
      	/*likes: 0,
      	dislikes: 0*/
    	},
    	{
      	name: 'Chardon #2',
      	price: 149,
        marque: 'Cae',
        categorie: 'Femme - Manteaux',
      	/*pubdate: new Date('2011', '08', '16'),*/
      	cover: 'http://www.cae-store.com/wp-content/uploads/2015/06/DSC_9639b-325x600.jpg',
      	/*likes: 0,
      	dislikes: 0*/
    	},
    	{
      	name: 'Chardon #3',
      	price: 159,
        marque: 'Cae',
        categorie: 'Femme - Manteaux',
      	/*pubdate: new Date('2011', '08', '16'),*/
      	cover: 'http://www.cae-store.com/wp-content/uploads/2015/06/DSC_9672b-325x600.jpg',
      	/*likes: 0,
      	dislikes: 0*/
    	}
    ];
    $scope.plusOne = function(index) {
    	$scope.products[index].likes += 1;
  	};
  	$scope.minusOne = function(index) {
    	$scope.products[index].dislikes += 1;
  	};
  }]);
