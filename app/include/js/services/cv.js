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
		education:{
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
						image:{
							src: 	"tec_mty_logo.jpg",
							alt: 	"Tecnológico de Monterrey",
							class: 	"general-info__education__option__logo"
						},
						class:"general-info__education__option__logo__container"
					},
					paragraph:{
						title:{
							text:"Ingeniero en tecnologías de información y comunicación",
							class:"general-info__education__option__paragraph__title"
						},
						subTitle:{
							text: 	"Saltillo, Coahuila",
							class: 	"general-info__education__option__paragraph__sub-title"
						},
						date:{
							text: 	"(2009-2014)",
							class: 	"general-info__education__option__paragraph__date"
						},
						class:"general-info__education__option__paragraph"
					},
					class:"general-info__education__option"
				},
				{
					title:{
						image:{
							src: 	"cbtis_logo_1.1.png",
							alt: 	"CBTis #36",
							class: 	"general-info__education__option__logo"
						},
						class:"general-info__education__option__logo__container"
					},
					paragraph:{
						title:{
							text:"Técnico en Mecatrónica",
							class:"general-info__education__option__paragraph__title"
						},
						subTitle:{
							text: 	"Monclova, Coahuila",
							class: 	"general-info__education__option__paragraph__sub-title"
						},
						date:{
							text: 	"(2006-2009)",
							class: 	"general-info__education__option__paragraph__date"
						},
						class:"general-info__education__option__paragraph"
					},
					class:"general-info__education__option"
				},
			],
			class: 	"general-info__education"
		},
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
	var contactIconColor="white";
	var contactIconType="flat";
	var contactIconSize="m";
	var contactIconClass="footer__contact__option__title__icon";

	var socialIconColor="white";
	var socialIconType="flat";
	var socialIconSize="m";
	var socialIconClass="footer__social__option__title__icon";

	//Content definition
	data={
		title:{
			title:{
				title:{
					text: 	"Contacto",
					class: 	"footer__title__title"
				},
				class: 	"footer__title__title__container"
			},
			paragraph:{
				title:{
					text: 	"\"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.\"",
					class: 	"footer__title__paragraph"
				},
				class: 	"footer__title__paragraph__container"
			},
			author:{
				title:{
					text: 	"Samuel Beckett",
					class: 	"footer__title__author"
				},
				class: 	"footer__title__author__container"
			},
			class: 	"footer__title"
		},
		contact:{
			options:[
				{
					title:{
						title:{
							text: 	"866 100 7948",
							class: 	"footer__contact__option__title"
						},
						class: 	"footer__contact__option__title__container"
					},
					icon:{
						id: 	"cellphone-android",
						size: 	contactIconSize,
						color: 	contactIconColor,
						type: 	contactIconType,
						class: 	contactIconClass
					},
					class: 	"footer__contact__option"
				},
				{
					title:{
						title:{
							text: 	"angel_adcm@hotmail.com",
							class: 	"footer__contact__option__title"
						},
						class: 	"footer__contact__option__title__container"
					},
					icon:{
						id: 	"email",
						size: 	contactIconSize,
						color: 	contactIconColor,
						type: 	contactIconType,
						class: 	contactIconClass
					},
					class: 	"footer__contact__option"
				},
				{
					title:{
						title:{
							text: 	"angel_adcm",
							class: 	"footer__contact__option__title"
						},
						class: 	"footer__contact__option__title__container"
					},
					icon:{
						id: 	"skype",
						size: 	contactIconSize,
						color: 	contactIconColor,
						type: 	contactIconType,
						class: 	contactIconClass
					},
					class: 	"footer__contact__option"
				},
			],
			class:"footer__contact"
		},
		social:{
			options:[
				{
					title:{
						title:{
							text: 	"@angdanadcm",
							class: 	"footer__social__option__title"
						},
						class: 	"footer__social__option__title__container"
					},
					link:{
						href: 	"https://twitter.com/angdanadcm",
						target: "_blank",
						class: 	"footer__social__option__link"
					},
					icon:{
						id: 	"twitter",
						size: 	socialIconSize,
						color: 	socialIconColor,
						type: 	socialIconType,
						class: 	socialIconClass
					},
					class: 	"footer__social__option"
				},
				{
					title:{
						title:{
							text: 	"angel-carvajal-6b853585",
							class: 	"footer__social__option__title"
						},
						class: 	"footer__social__option__title__container"
					},
					link:{
						href: 	"https://mx.linkedin.com/in/angel-carvajal-6b853585",
						target: "_blank",
						class: 	"footer__social__option__link"
					},
					icon:{
						id: 	"linkedin",
						size: 	socialIconSize,
						color: 	socialIconColor,
						type: 	socialIconType,
						class: 	socialIconClass
					},
					class: 	"footer__social__option"
				},
				{
					title:{
						title:{
							text: 	"angeldaniel-adcm",
							class: 	"footer__social__option__title"
						},
						class: 	"footer__social__option__title__container"
					},
					link:{
						href: 	"https://github.com/angeldaniel-adcm",
						target: "_blank",
						class: 	"footer__social__option__link"
					},
					icon:{
						id: 	"github-circle",
						size: 	socialIconSize,
						color: 	socialIconColor,
						type: 	socialIconType,
						class: 	socialIconClass
					},
					class: 	"footer__social__option"
				}
			],
			class:"footer__social"
		},
		signature:{
			title:{
				title:{
					text: 	"Made by",
					class: 	"footer__signature__title"
				},
				class: 	"footer__signature__title__container"
			},
			logo:{
				image:{
					src: 	"ac_logo_1.2.png",
					class: 	"footer__signature__logo"
				},
				class: 	"footer__signature__logo__container"
			},
			host: 	globalVariables.hostname,
			class: 	"footer__signature"
		},
		classToAnimate: "bounceInUp",
		class:"footer"
	};

	return data;
}])