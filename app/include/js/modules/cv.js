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
		var gradesSize;
	//Scope variables definition
		$scope.content=knowledgeContent;

	//Controller functions
		$scope.constructGrades=function(){
			$scope.content.technologies.types.forEach(function(element1,index1,array1){
				$scope.content.technologies.types[index1].techs.options.forEach(function(element2,index2,array2){
					$scope.content.technologies.types[index1].techs.options[index2].grades.forEach(function(element3,index3,array3){
						gradesSize=((index3+1)*20);
						if (index3===0) {
							gradesSize=30;
						}

						if(element3){
							$scope.content.technologies.types[index1].techs.options[index2].grades[index3]={};
							$scope.content.technologies.types[index1].techs.options[index2].grades[index3].class="knowledge__technologies__type__techs__tech__grades__grade--actived";
							$scope.content.technologies.types[index1].techs.options[index2].grades[index3].size=gradesSize;
						}
						else{
							$scope.content.technologies.types[index1].techs.options[index2].grades[index3]={};
							$scope.content.technologies.types[index1].techs.options[index2].grades[index3].size=gradesSize;
						}
					});
				});
			});
		}

	//Run default functions
		$scope.constructGrades();
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