angular.module('yapp').factory('DataFactory', function($http, $q){
	/** @type {Object} Objet stockage des méthodes et var de la Factory */
	var factor = {
		/** @type {Boolean} stockage du retour de la requete http */
		json: false,

		///////////////////////////////
		// RECUPERATION DES DONNEES  //
		///////////////////////////////
		/**
		 * Méthode http get, récupération des données sur mytem
		 * @return {promise} résultat récupération données
		 */
		getData: function (){
			console.log('Get data ->');
			var deferred = $q.defer();
			$http({
				cache: true,
				method: 'GET',
				url: 'http://localhost:8081/listProducts'
			}).then(function (response) {
				console.log('<- Get data');
				console.log(response.data);
				factor.json = factor.formatData(response);
				deferred.resolve(factor.json);
			}, function (response) {
				console.log('Erreur');
				deferred.reject('Impossible');
			}
			);
			return deferred.promise;
		},
		postData: function (products){
			console.log('Post data ->');
			var deferred = $q.defer();
			console.log(products);
			$http({
				method: 'POST',
				url: 'http://localhost:8081/postProducts',
				data: factor.postFormatData(products)
			}).then(function (response) {
				console.log('<- Post data');
				console.log(response.data);
				deferred.resolve();
			}, function (response) {
				console.log('Erreur');
				deferred.reject('Impossible');
			}
			);
			return deferred.promise;
		},
		formatData: function (response) {
		console.log('format data ->');
		var rowDonnees = {};
		rowDonnees =[];
		for (var j = 0; j < response.data.length; j++) {
			rowDonnees.push({
				ref: response.data[j]["Référence produit"],
				cat: response.data[j]["Catégorie"],
				marque: response.data[j]["Marque"],
				nom: response.data[j]["Nom produit"],
				prix: response.data[j]["Prix"],
				url: response.data[j]["Url image"],
				com: response.data[j]["Commentaire"],
				shop: response.data[j]["Shop"]
			});
		}
		console.log('<- format data');
		console.log(rowDonnees);
		return rowDonnees;
	},
	postFormatData: function (products) {
	console.log('format data ->');
	var rowData = {};
	rowData =[];
	for (var j = 0; j < products.length; j++) {
		rowData.push({
			"Référence produit": products[j].ref,
			"Catégorie": products[j].cat,
			"Marque": products[j].marque,
			"Nom produit": products[j].nom,
			"Prix": products[j].prix,
			"Url image": products[j].url,
			"Commentaire": products[j].com,
			"Shop": products[j].shop
		});
	}
	console.log('<- format data');
	console.log(rowData);
	return rowData;
}};
		return factor;
	});
