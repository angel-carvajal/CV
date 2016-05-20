angular.module("angelRouter",["ui.router","oc.lazyLoad","lumx","appNavigation","globalDirectives","global","angular-inview"])
.config(["$urlRouterProvider",function($urlRouterProvider){
	$urlRouterProvider.otherwise("/");
}])

.config(["$stateProvider",function ($stateProvider){
	$stateProvider
		//Lazy load always needed files
		.state("alwaysRequiredFiles",{
			resolve:{
				home:["$ocLazyLoad",function($ocLazyLoad){
					return $ocLazyLoad.load(
						{
							files:[
								"include/style/reset.css",
								"../bower_components/normalize-css/normalize.css",
								"../bower_components/lumx/dist/lumx.css",
								"../bower_components/animate.css/animate.min.css",
								"include/style/main.css"
							]
						}
					)
				}]
			}
		})
		//Default view
		.state("cv",{
			url:"/",
			templateUrl: "include/templates/cv.html",
			resolve:{
				home:["$ocLazyLoad",function($ocLazyLoad){
					return $ocLazyLoad.load(
						{
							name:"appCv",
							files:[
								"include/js/directives/cv.js",
								"include/js/modules/cv.js",
								"include/js/services/cv.js"
							]
						}
					)
				}]
			}
		})
}])

.controller("alwaysLoad",["$scope","$state","$timeout","globalVariables",function($scope,$state,$timeout,globalVariables){
	//Run state to lazy load files required
	$state.go("alwaysRequiredFiles");

	//Scope variables definition
	$scope.viewsLoaded=[false,false,false,false,false,false];
	$scope.content={};
	$scope.content={
		load:{
			title:{
				title:{
					text:"Made by ",
					class:"welcome__title"
				},
				class: 	"welcome__title__container"
			},
			logo:{
				image:{
					src:"ac_logo.png",
					class:"welcome__image"
				},
				class:"welcome__image__container"
			},
			host:globalVariables.hostname,
			class:"welcome__load"
		},
		class:"welcome"
	};
	$scope.load=false;

	$scope.loadAnimate=function(id,element,effect){
		if(!$scope.viewsLoaded[id]){
			$(element.inViewTarget).addClass("visible animated "+effect);
			$scope.viewsLoaded[id]=true;
		}
	};

}])