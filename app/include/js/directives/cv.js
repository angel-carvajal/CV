angular.module("cvDirectives",[])
.directive("personalInfo",["globalVariables",function(globalVariables){
	return{
		restrict:"E",
		templateUrl:globalVariables.hostname+"include/templates/personalInfo.html"
	}
}])