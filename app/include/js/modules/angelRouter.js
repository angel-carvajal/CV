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

	//execute untill template fully loaded with delay 0
	$timeout(function(){
		//Typed effect.
		$(function(){
			$(".typing").typed({
				strings: [""+$scope.content.load.title.title.text+""],
				typeSpeed: 50,
				showCursor: false,
				startDelay: 500,
				callback: function() {
					//Add class to simulate move
					$(".welcome__image__container").addClass("welcome__image__container--actived");
					//Listener of transition - standard
					$(".welcome__image__container")[0].addEventListener("transitionend",function(){
						$timeout(function(){
							$(".welcome__load").addClass("welcome__load--actived");

							$(".welcome__load")[0].addEventListener("webkitTransitionEnd",function(){
								$timeout($scope.updateLoad(),500);
							});
							$(".welcome__load")[0].addEventListener("transitionend",function(){
								$timeout($scope.updateLoad(),500);
							});
						},1500);
					});
					//Listener of transition - Safari 3.1 to 6.0
					$(".welcome__image__container")[0].addEventListener("webkitTransitionEnd",function(){
						$timeout(function(){
							$(".welcome__load").addClass("welcome__load--actived");

							$(".welcome__load")[0].addEventListener("webkitTransitionEnd",function(){
								$timeout($scope.updateLoad(),500);
							});
							$(".welcome__load")[0].addEventListener("transitionend",function(){
								$timeout($scope.updateLoad(),500);
							});
						},1500);
					});
				}
			});
		});

	},0);

	$scope.updateLoad=function(){
		$scope.load=true;
		$scope.$apply();
	};

	$scope.loadAnimate=function(id,element,effect){
		if(!$scope.viewsLoaded[id]){
			$(element.inViewTarget).addClass("visible animated "+effect);
			$scope.viewsLoaded[id]=true;
		}
		
	}

}])