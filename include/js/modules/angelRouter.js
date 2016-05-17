angular.module("angelRouter",["ui.router","oc.lazyLoad","lumx","appNavbar"])
.config(["$urlRouterProvider",function($urlRouterProvider){
	$urlRouterProvider.otherwise("/");
}])

.config(["$stateProvider",function ($stateProvider){
	$stateProvider
		//Lazy load always needed files
		.state("alwaysRequiredFiles",{
			resolve:{
				home:function($ocLazyLoad){
					return $ocLazyLoad.load(
						{
							files:[
								
							]
						}
					)
				}
			}
		})
		//Default view
		.state("cv",{
			url:"/",
			templateUrl: "include/templates/cv.html",
			resolve:{
				home:function($ocLazyLoad){
					return $ocLazyLoad.load(
						{
							name:"appCv",
							files:[
								"include/js/modules/cv.js",
								"include/js/services/cv.js"
							]
						}
					)
				}
			}
		})
}])

.controller("alwaysLoad",["$scope","$state","$timeout",function($scope,$state,$timeout){
	//Run state to lazy load files required
	$state.go("alwaysRequiredFiles");
	$scope.load=false;
	$timeout(function(){
		$scope.load=true;
	},2000);
	
}])