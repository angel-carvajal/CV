angular.module("appCv",["cv"])
//General information controller
.controller("generalController",["$scope","generalContent",function($scope,generalContent){
	//Local variables definition
		
	//Scope variables definition
		$scope.content=generalContent;
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
//Courses information controller
.controller("coursesController",["$scope","coursesContent",function($scope,coursesContent){
	//Local variables definition

	//Scope variables definition
		$scope.content=coursesContent;
	//Controller functions
}])
//Extras information controller
.controller("extrasController",["$scope","extrasContent",function($scope,extrasContent){
	//Local variables definition

	//Scope variables definition
		$scope.content=extrasContent;
	//Controller functions
}])