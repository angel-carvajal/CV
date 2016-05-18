angular.module("appNavigation",["global","navigation"])
//Navigation bar controller
.controller("navigationController",["$scope","navigationContentSpanish","navigationContentEnglish",function($scope,navigationContentSpanish,navigationContentEnglish){
	//Local variables definition
	var content = navigationContentSpanish; //Default language content

	//Scope variables definition
	$scope.content=content;
}])