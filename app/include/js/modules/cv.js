angular.module("appCv",["cv"])
//General information controller
.controller("coverController",["$scope","$uiViewScroll","$timeout","globalVariables","coverContent",function($scope,$uiViewScroll,$timeout,globalVariables,coverContent){
	//Local variables definition
		
	//Scope variables definition
		$scope.content=coverContent;
		$scope.hostname=globalVariables.hostname;
		$scope.linkToImages="include/images/"
	//Controller functions
		$timeout(function(){
			$uiViewScroll($(".cover"));
		},0)
		

}])
//General information controller
.controller("generalController",["$scope","globalVariables","generalContent",function($scope,globalVariables,generalContent){
	//Local variables definition
		
	//Scope variables definition
		$scope.content=generalContent;
		$scope.hostname=globalVariables.hostname;
		$scope.linkToImages="include/images/"
	//Controller functions

}])
//Work experience information controller
.controller("experienceController",["$scope","experienceContent",function($scope,experienceContent){
	//Local variables definition

	//Scope variables definition
		$scope.content=experienceContent;
	//Controller functions
}])
//Knowledge information controller
.controller("knowledgeController",["$scope","knowledgeContent",function($scope,knowledgeContent){
	//Local variables definition

	//Scope variables definition
		$scope.content=knowledgeContent;
	//Controller functions
}])
//Projects information controller
.controller("projectsController",["$scope","projectsContent",function($scope,projectsContent){
	//Local variables definition

	//Scope variables definition
		$scope.content=projectsContent;
	//Controller functions
}])

//Extras information controller
.controller("footerController",["$scope","footerContent",function($scope,footerContent){
	//Local variables definition

	//Scope variables definition
		$scope.content=footerContent;
	//Controller functions
}])