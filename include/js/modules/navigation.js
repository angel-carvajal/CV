angular.module("appNavigation",["global","navigation"])
//Navigation bar controller
.controller("navigationController",["$scope","$uiViewScroll","navigationContent",function($scope,$uiViewScroll,navigationContent){
	//Local variables definition
	var content = navigationContent; //Default language content

	//Scope variables definition
	$scope.content=content;

	//Controller functions
	$scope.scrollTo=function(section){
		$uiViewScroll($("."+section));
	}
	$scope.toggleMenu=function(){
		
	}
}])