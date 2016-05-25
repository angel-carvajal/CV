angular.module("globalDirectives",[])
.directive("customeTitle",["globalVariables",function(globalVariables){
	//console.log(globalVariables.hostname);
	return{
		restrict:"E",
		scope:{
			title:"="
		},
		templateUrl:globalVariables.hostname+"include/templates/global/customeTitle.html"
	}
}])
.directive("customeSubTitle",["globalVariables",function(globalVariables){
	return{
		restrict:"E",
		scope:{
			subtitle:"="
		},
		templateUrl:globalVariables.hostname+"include/templates/global/customeSubTitle.html"
	}
}])
.directive("customeLink",["globalVariables",function(globalVariables){
	//console.log(globalVariables.hostname);
	return{
		restrict:"E",
		scope:{
			link:"=",
			extra:"&"
		},
		templateUrl:globalVariables.hostname+"include/templates/global/customeLink.html"
	}
}])
.directive("icon",["globalVariables",function(globalVariables){
	//console.log(globalVariables.hostname);
	return{
		restrict:"E",
		scope:{
			icon:"="
		},
		templateUrl:globalVariables.hostname+"include/templates/global/icon.html"
	}
}])
.directive("iconButton",["globalVariables",function(globalVariables){
	//console.log(globalVariables.hostname);
	return{
		restrict:"E",
		scope:{
			icon:"=",
			id:"="
		},
		templateUrl:globalVariables.hostname+"include/templates/global/iconButton.html"
	}
}])
.directive("customeP",["globalVariables",function(globalVariables){
	//console.log(globalVariables.hostname);
	return{
		restrict:"E",
		scope:{
			paragraph:"="
		},
		templateUrl:globalVariables.hostname+"include/templates/global/customeP.html"
	};
}])
.directive("loading",["globalVariables",function(globalVariables){
	//console.log(globalVariables.hostname);
	return{
		restrict:"E",
		scope:{
			load:"="
		},
		controller:["$scope","$timeout",function($scope,$timeout){
			$timeout(function(){
				//Typed effect				
				$(function(){
					$(".typing").typed({
						strings: [""+$scope.load.title.title.text+""],
						typeSpeed: 50,
						showCursor: false,
						startDelay: 1000,
						callback: function() {
							//Add class to simulate move
							$(".welcome__image__container").addClass("welcome__image__container--actived");
							//Listener of transition - standard
							$(".welcome__image__container")[0].addEventListener("transitionend",function(){
								$timeout(function(){
									$(".welcome__load").addClass("welcome__load--actived");

									$(".welcome__load")[0].addEventListener("webkitTransitionEnd",function(){
										$scope.updateLoad();
									});
									$(".welcome__load")[0].addEventListener("transitionend",function(){
										$scope.updateLoad();
									});
								},1500);
							});
							//Listener of transition - Safari 3.1 to 6.0
							$(".welcome__image__container")[0].addEventListener("webkitTransitionEnd",function(){
								$timeout(function(){
									$(".welcome__load").addClass("welcome__load--actived");

									$(".welcome__load")[0].addEventListener("webkitTransitionEnd",function(){
										$scope.updateLoad();
									});
									$(".welcome__load")[0].addEventListener("transitionend",function(){
										$scope.updateLoad();
									});
								},1500);
							});
						}
					});
				});
			},0);

			$scope.updateLoad=function(){
				$scope.$parent.$parent.load=true;
				$scope.$parent.$parent.$apply();
			};
		}],
		templateUrl:globalVariables.hostname+"include/templates/global/loading.html"
	};
}])
.directive("navBar",["globalVariables",function(globalVariables){
	return{
		restrict:"E",
		templateUrl:globalVariables.hostname+"include/templates/navbar.html"
	};
}])