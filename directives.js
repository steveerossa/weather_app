//DIRECTIVES TO MANIPULATE ATTRIBUTES
weatherApp.directive("weatherReport",function(){
	return {
		restrict: "E",
		templateUrl: "directives/weatherReport.html",
		replace: true,
		scope: {
			// THESE WILL GO TO DIRECTIVES PAGE AND GET NORMALIZED
			weatherDay: "=",
			convertToStandard: "&",
			convertToDate: "&",
			dateFormat: "@"

		}
	}
});
