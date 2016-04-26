//FIRST THE MODULES
var weatherApp = angular.module("weatherApp", ["ngRoute", "ngResource"]);
/* REQUIREMENTS
HOME PAGE WHERE I CAN GET FORECAST FOR MY CITY
WHEN CLICKED TAKES AS TO PAGE WITH 2, 4, 7 DAY FORECASTS 
*/

/*
ROUTES

weatherApp.config(function($routeProvider) {
	$routeProvider.
		when("/", {
			templateUrl: "pages/home.html",
			controller: "homeController"
		})
		.when("/forecast", {
			templateUrl: "pages/forecast.html",
			controller: "forecastController"
		})
		.when('/forecast/:days', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
});/

//CREATE SERVICE THEN INJECT INTO CONTROLLERS
weatherApp.service("cityService", function() {
	this.city = "Seattle, WA";
});*

/*CONTROLLERS ONE FOR HOME PAGE AND ONE FOR 
FORECAST PAGE 
// HOME , INJECTED CITY SERVICE
weatherApp.controller("homeController", ["$scope","cityService","$location", function($scope, cityService, $location) {
	$scope.city = cityService.city; // NG-MODEL = CITY
	// WATCHING FOR CHANGING CITY WHEN NEW ONE TYPED IN
	$scope.$watch("city", function() {
		cityService.city = $scope.city;
	});
	$scope.submit = function()
	{
		$location.path("/forecast");
	}
}]);
FORECAST
//key 637b15f68290c6ae81fc4a2af50b1555
//url http://api.openweathermap.org/data/2.5/forecast/daily
weatherApp.controller("forecastController", ["$scope", "cityService", "$resource", "$routeParams", function($scope, cityService, $resource,$routeParams) {
	$scope.days = $routeParams.days || "2";
	$scope.city = cityService.city;
	$scope.weatherAPI = 
//url http://api.openweathermap.org/data/2.5/forecast/daily
	$resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK", APPID: "637b15f68290c6ae81fc4a2af50b1555" },
	 {get: {method: "JSONP"}});

	$scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: $scope.days});

	$scope.convertToFahrenheit = function(degK) {
		return Math.round((1.8 * (degK - 273)) + 32);
	}
	$scope.formatDate = function(date) {
		return new Date(date * 1000); // FOR THE MILLESECONDS
	}
}]);
//DIRECTIVES TO MANIPULATE ATTRIBUTES
weatherApp.directive("weatherReport",function(){
	return {
		restrict: "E",
		templateUrl: "directives/weatherReport.html",
		replace: true,
		scope: {
			// THESE WILL GO TO DIRECTIVES PAGE AND GET NORMALIZE
			weatherDay: "=",
			convertToStandard: "&",
			convertToDate: "&",
			dateFormat: "@"

		}
	}
});
*/
