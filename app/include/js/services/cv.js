angular.module("cv",[])
.factory("coverContent",["globalVariables",function(globalVariables){
	//Variables declaration
	var data={};

	//Content definition
	data={
		container:{
			title:{
				title:{
					text: 	"Angel Carvajal",
					class: 	"cover__container__title"
				},
				class: 	"cover__container__title__container"
			},
			subTitle:{
				title:{
					text: 	"Project Manager. Developer.",
					class: 	"cover__container__sub-title"
				},
				class: 	"cover__container__sub-title__container"
			},
			class: 	"cover__container"
		},
		image:{
			class: "cover__image"
		},
		classToAnimate: "fadeIn",
		class: 			"cover"
	};

	return data;
}])
.factory("generalContent",["globalVariables",function(globalVariables){
	//Variables declaration
	var data={};
	var iconColor="teal";
	var iconType="flat";
	var iconSize="s";
	var iconClass="general-info__contact__option__title__icon";
	var age=(Date.now()-(new Date("1991,4,8")));
	age=new Date(age); //move this to a filter
	age=age.getUTCFullYear()-1970;

	//Content definition
	data={
		title:{
			title:{
				text: 	"Perfil",
				class: 	"general-info__title"
			},
			paragraph:{
				text: 	"Soy un PM, desarrolador Frontend con Angular y Backend con PHP",
				class: 	"general-info__paragraph"
			},
			class: 	"general-info__title__container"
		},
		information:[
			{
				title:{
					title:{
						text: 	"Acerca de mi",
						class: 	"general-info__goal__title"
					},
					class: 		"general-info__goal__title__container"
				},
				paragraph:{
					title:{
						text:"Soy un desarrollador frontend y backend apasionado, me gusta estar aprendiendo cosas nuevas e implementarlas. Optimizar al máximo mi código es una prioridad así como también lo es la experiencia de usuario. También soy un Project manager enfocado a entender la necesidad del cliente e impulsar y orientar sus proyectos.",
						class:"general-info__goal__paragraph",
					},
					class:"general-info__goal__paragraph__container"
				},
				class: 	"general-info__goal"
			},
			{
				image:{
					src: 	"me_1.2.jpg",
					alt: 	"Angel Carvajal",
					class: 	"general-info__image"
				},
				class:"general-info__image__container"
			},
			{
				title:{
					title:{
						text: 	"Detalles",
						class: 	"general-info__profile__title"
					},
					class: 	"general-info__profile__title__container"
				},
				options:[
					{
						title:{
							title:{
								text: 	"Nombre:",
								class: 	"general-info__profile__option__title"
							},
							class: 	"general-info__profile__option__title__container"
						},
						paragraph:{
							title:{
								text: 	"Angel Carvajal",
								class: 	"general-info__profile__option__description"
							},
							class: 	"general-info__profile__option__description__container"
						},
						class: 	"general-info__profile__option"
					},
					{
						title:{
							title:{
								text: 	"Edad:",
								class: 	"general-info__profile__option__title"
							},
							class: 	"general-info__profile__option__title__container"
						},
						paragraph:{
							title:{
								text: 	age+" años",
								class: 	"general-info__profile__option__description"
							},
							class: 	"general-info__profile__option__description__container"
						},
						class: 	"general-info__profile__option"
					},
					{
						title:{
							title:{
								text: 	"Locación:",
								class: 	"general-info__profile__option__title"
							},
							class: 	"general-info__profile__option__title__container"
						},
						paragraph:{
							title:{
								text: 	"Coahuila, México",
								class: 	"general-info__profile__option__description"
							},
							class: 	"general-info__profile__option__description__container"
						},
						class: 	"general-info__profile__option"
					}
				],
				class: 	"general-info__profile"
			}
		],
		informationClass: 	"general-info__information",
		classToAnimate: "bounceInUp",
		class: 	"general-info"
	};

	return data;
}])
.factory("knowledgeContent",["globalVariables",function(globalVariables){
	//Variables declaration
	var data={};

	//Content definition
	data={
		
	};

	return data;
}])
.factory("experienceContent",["globalVariables",function(globalVariables){
	//Variables declaration
	var data={};

	//Content definition
	data={
		
	};

	return data;
}])
.factory("projectsContent",["globalVariables",function(globalVariables){
	//Variables declaration
	var data={};

	//Content definition
	data={
		
	};

	return data;
}])
.factory("footerContent",["globalVariables",function(globalVariables){
	//Variables declaration
	var data={};

	//Content definition
	data={
		
	};

	return data;
}])