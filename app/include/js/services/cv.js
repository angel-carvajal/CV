angular.module("cv",[])
.factory("coverContent",["globalVariables",function(globalVariables){
	//Variables declaration
	var data={};

	//Content definition
	data={
		
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
		personal:{
			name:{
				title:{
					text: 	"Angel Carvajal",
					class: 	"general-info__personal__name"
				},
				class: 	"general-info__personal__name__container"
			},
			position:{
				title:{
					text: 		"Project Manager, desarrollador Frontend y Backend",
					divider: 	"lineP",
					class: 		"general-info__personal__position"
				},
				class: 	"general-info__personal__position__container"
			},
			picture:{
				image:{
					src: 	"profile.jpg",
					alt: 	"Angel Carvajal",
					class: 	"general-info__personal__profile-picture"
				},
				class: 	"general-info__personal__profile-picture__container"
			},
			age:{
				title:{
					text: 	age+" años",
					class: 	"general-info__personal__age"
				},
				class:"general-info__personal__age__container"
			},
			from:{
				title:{
					text: 	"Coahuila, México",
					class: 	"general-info__personal__from"
				},
				class: 	"general-info__personal__from__container"
			},
			class: 	"general-info__personal"
		},
		contact:{
			title:{
				title:{
					text: 	"Información de contacto",
					class: 	"general-info__contact__title"
				},
				class: 	"general-info__contact__title__container"
			},
			options:[
				{
					description:{
						title:{
							text: 	"866 100 7948",
							class: 	"general-info__contact__option__title"
						},
						class: 	"general-info__contact__option__title__container"
					},
					icon:{
						id: 	"cellphone-android",
						size: 	iconSize,
						color: 	iconColor,
						type: 	iconType,
						class: 	iconClass
					},
					class: 	"general-info__contact__option"
				},
				{
					description:{
						title:{
							text: 	"angel_adcm@hotmail.com",
							class: 	"general-info__contact__option__title"
						},
						class: 	"general-info__contact__option__title__container"
					},
					icon:{
						id: 	"email",
						size: 	iconSize,
						color: 	iconColor,
						type: 	iconType,
						class: 	iconClass
					},
					class: 	"general-info__contact__option"
				},
				{
					description:{
						title:{
							text: 	"angel_adcm",
							class: 	"general-info__contact__option__title"
						},
						class: 	"general-info__contact__option__title__container"
					},
					icon:{
						id: 	"skype",
						size: 	iconSize,
						color: 	iconColor,
						type: 	iconType,
						class: 	iconClass
					},
					class: 	"general-info__contact__option"
				},
				{
					description:{
						title:{
							text: 	"@angdanadcm",
							class: 	"general-info__contact__option__title"
						},
						class: 	"general-info__contact__option__title__container"
					},
					icon:{
						id: 	"twitter",
						size: 	iconSize,
						color: 	iconColor,
						type: 	iconType,
						class: 	iconClass
					},
					class: 	"general-info__contact__option"
				},
				{
					description:{
						title:{
							text: 	"angel-carvajal-6b853585",
							class: 	"general-info__contact__option__title"
						},
						class: 	"general-info__contact__option__title__container"
					},
					icon:{
						id: 	"linkedin",
						size: 	iconSize,
						color: 	iconColor,
						type: 	iconType,
						class: 	iconClass
					},
					class: 	"general-info__contact__option"
				},
				{
					description:{
						title:{
							text: 	"angeldaniel-adcm",
							class: 	"general-info__contact__option__title"
						},
						class: 	"general-info__contact__option__title__container"
					},
					icon:{
						id: 	"github-circle",
						size: 	iconSize,
						color: 	iconColor,
						type: 	iconType,
						class: 	iconClass
					},
					class: 	"general-info__contact__option"
				}
			],
			class:"general-info__contact"
		},
		information:[
			{
				title:{
					title:{
						text: 	"Perfil",
						class: 	"general-info__profile__title"
					},
					class: 	"general-info__profile__title__container"
				},
				options:[
					{
						paragraph:{
							text: 	"Administrador de proyectos agiles, desarrollador frontend con angular, desarrollador backend con PHP OO",
							class: 	"general-info__profile__description"
						},
						class: 	"general-info__profile__description__container"
					}
				],
				class: 	"general-info__profile"
			},
			{
				title:{
					title:{
						text: 	"Objetivo",
						class: 	"general-info__goal__title"
					},
					class: 	"general-info__goal__title__container"
				},
				options:[
					{
						paragraph:{
							text: 	"Ampliar conocimientos en administración de proyectos agiles, experiencia de usuario y desarrollo frontend y backend",
							class: 	"general-info__goal__description"
						},
						class: 	"general-info__goal__description__container"
					},
				],
				class: 	"general-info__goal"
			},
			{
				title:{
					title:{
						text: 	"Educación",
						class: 	"general-info__education__title"
					},
					class: 	"general-info__education__title__container"
				},
				options:[
					{
						title:{
							title:{
								text: 	"ITESM campus Saltillo",
								class: 	"general-info__education__option__title"
							},
							class: 	"general-info__education__option__title__container"
						},
						description:{
							paragraph:{
								text: 	"Ing. en Tecnologías de Información y Comunicación",
								class: 	"general-info__education__option__description"
							},
							class: 	"general-info__education__option__description__container"
						},
						date:{
							paragraph:{
								text: 	"(2009-2014)",
								class: 	"general-info__education__option__date"
							},
							class: 	"general-info__education__option__date__container"
						},
						class: "general-info__education__option"
					},
					{
						title:{
							title:{
								text: 	"CBTis #36",
								class: 	"general-info__education__option__title"
							},
							class: 	"general-info__education__option__title__container"
						},
						description:{
							paragraph:{
								text: 	"Técnico en Mecatrónica",
								class: 	"general-info__education__option__description"
							},
							class: 	"general-info__education__option__description__container"
						},
						date:{
							paragraph:{
								text: 	"(2006-2009)",
								class: 	"general-info__education__option__date"
							},
							class: 	"general-info__education__option__date__container"
						},
						class: "general-info__education__option"
					}
				],
				class: 	"general-info__education"
			},
		],
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