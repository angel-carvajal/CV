angular.module("navigation",["global"])
//Navigation bar content factory
.factory("navigationContent",["globalVariables",function(globalVariables){
	//Variables declaration
	var data={};
	var menuIconSize="xl";
	var menuIconColor="teal";
	var menuIconType="icon";
	var menuIconClass="navigation__icon";

	//Content definition
	data={
		icon:{
			icon:{
				id: 	"menu",
				size: 	menuIconSize,
				color: 	menuIconColor,
				type: 	menuIconType,
				class: 	menuIconClass
			},
			class:"navigation__icon__container"
		},
		nav:{
			options:[
				{
					link:{
						text:  	"Información general",
						class: 	"navigation__link"
					},
					action: "general-info",
				},
				{
					link:{
						text: "Experiencia laboral",
						class: 	"navigation__link"
					},
					action: "experience",
				},
				{
					link:{
						text: "Habilidades",
						class: 	"navigation__link"
					},
					action: "knowledge",
				},
				{
					link:{
						text: "Proyectos",
						class: 	"navigation__link"
					},
					action: "projects",
				},
				{
					link:{
						text: "Contacto",
						class: 	"navigation__link"
					},
					action: "footer",
				},
			],
		},
		class:"navigation"
	};
	
	return data;
}])