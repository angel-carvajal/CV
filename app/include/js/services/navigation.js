angular.module("navigation",["global"])
//Navigation bar content factory
.factory("navigationContentSpanish",["globalVariables",function(globalVariables){
	//Variables declaration
	var data={};

	//Content definition
	data={
		nav:{
			option:[
				{
					title:{
						text:"Información general",
						class:""
					},
					link:{
						action:"general-info",
						class:""
					},
					class:""
				},
				{
					title:{
						text:"Experiencia laboral",
						class:""
					},
					link:{
						action:"work-experience",
						class:""
					},
					class:""
				},
				{
					title:{
						text:"Conocimientos",
						class:""
					},
					link:{
						action:"knowledge",
						class:""
					},
					class:""
				},
				{
					title:{
						text:"Proyectos",
						class:""
					},
					link:{
						action:"projects",
						class:""
					},
					class:""
				},
				{
					title:{
						text:"Cursos",
						class:""
					},
					link:{
						action:"courses",
						class:""
					},
					class:""
				},
				{
					title:{
						text:"Extras",
						class:""
					},
					link:{
						action:"extras",
						class:""
					},
					class:""
				},
			],
			class:""
		},
		class:""
	};
	
	return data;
}])
.factory("navigationContentEnglish",["globalVariables",function(globalVariables){
	//Variables declaration
	var data={};

	//Content definition
	data={
		nav:{
			option:[
				{
					title:{
						class:""
					},
					link:{
						class:""
					},
					class:""
				},
			],
			class:""
		},
		class:""
	};
	
	return data;
}])