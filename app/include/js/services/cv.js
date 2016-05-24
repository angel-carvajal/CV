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
.factory("experienceContent",["globalVariables",function(globalVariables){
	//Variables declaration
	var data={};

	//Content definition
	data={
		title:{
			title:{
				text: 	"Experiencia laboral",
				class: 	"experience__title"
			},
			class:"experience__title__container"
		},
		options:[
			{
				title:{
					position:{
						title:{
							text:"CEO",
							class:"experience__option__title__position"
						},
						class: 	"experience__option__title__position__container"
					},
					company:{
						title:{
							text: 	"SaludC y Servicios de TI",
							class: 	"experience__option__title__company"
						},
						class: 	"experience__option__title__company__container"
					},
					date:{
						title:{
							text: 	"(Marzo 2014 - Actualidad)",
							class: 	"experience__option__title__date"
						},
						class: 	"experience__option__title__date__container"
					},
					class: 	"experience__option__title"
				},
				information:{
					description:{
						title:{
							text: 	"Básicamente me desempeño en todas las áreas de la empresa. Busco clientes nuevos y trato con clientes actuales lo cual me permite tener facilidad de comunicación con enfoque empresa – cliente. Me encargo del levantamiento de requerimientos y administración de proyectos, desarrollo frontend y backend.",
							class: 	"experience__option__information__description"
						},
						class: 	"experience__option__information__description__container"
					},
					duties:{
						title:{
							title:{
								text: 	"Responsabilidades",
								class: 	"experience__option__information__duties__title"
							},
							class: "experience__option__information__duties__title__container",
						},
						options:[
							{
								title:{
									text: 	"Administración de proyectos",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
							{
								title:{
									text: 	"Validación de mercado",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
							{
								title:{
									text: 	"Toma de decisiones",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
							{
								title:{
									text: 	"Contratos",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
							{
								title:{
									text: 	"Facturación",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
							{
								title:{
									text: 	"Desarrollo frontend",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
							{
								title:{
									text: 	"Desarrollo backend",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
							{
								title:{
									text: 	"Control de versiones",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
							{
								title:{
									text: 	"Pruebas",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
						],
						optionsClass: 	"experience__option__information__duties__duty",
						class: "experience__option__information__duties"
					},
					location:{
						title:{
							text:  	"Saltillo, Coahuila / Monclova, Coahuila / Monterrey, Nuevo León",
							class: 	"experience__option__information__location"
						},
						class: 	"experience__option__information__location__container"
					},
					class: 	"experience__option__information"
				},
				class: "experience__option"
			},
			{
				title:{
					position:{
						title:{
							text:"Desarrollador",
							class:"experience__option__title__position"
						},
						class: 	"experience__option__title__position__container"
					},
					company:{
						title:{
							text: 	"Mubea Saltillo",
							class: 	"experience__option__title__company"
						},
						class: 	"experience__option__title__company__container"
					},
					date:{
						title:{
							text: 	"(Diciembre 2013 - Marzo 2014)",
							class: 	"experience__option__title__date"
						},
						class: 	"experience__option__title__date__container"
					},
					class: 	"experience__option__title"
				},
				information:{
					description:{
						title:{
							text: 	"Fui contratado para un proyecto de actualización y traducción de un sistema interno de mejora continua.",
							class: 	"experience__option__information__description"
						},
						class: 	"experience__option__information__description__container"
					},
					duties:{
						title:{
							title:{
								text: 	"Responsabilidades",
								class: 	"experience__option__information__duties__title"
							},
							class: "experience__option__information__duties__title__container",
						},
						options:[
							{
								title:{
									text: 	"Levantamiento de requerimientos",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
							{
								title:{
									text: 	"Desarrollo frontend",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
							{
								title:{
									text: 	"Desarrollo backend",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
							{
								title:{
									text: 	"Pruebas",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
							{
								title:{
									text: 	"Implementación",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
						],
						optionsClass: 	"experience__option__information__duties__duty",
						class: "experience__option__information__duties"
					},
					location:{
						title:{
							text:  	"Ramos Arizpe, Coahuila",
							class: 	"experience__option__information__location"
						},
						class: 	"experience__option__information__location__container"
					},
					class: 	"experience__option__information"
				},
				class: "experience__option"
			},
			{
				title:{
					position:{
						title:{
							text:"Desarrollador",
							class:"experience__option__title__position"
						},
						class: 	"experience__option__title__position__container"
					},
					company:{
						title:{
							text: 	"Francés Online",
							class: 	"experience__option__title__company"
						},
						class: 	"experience__option__title__company__container"
					},
					date:{
						title:{
							text: 	"(Mayo 2013 - Noviembre 2013)",
							class: 	"experience__option__title__date"
						},
						class: 	"experience__option__title__date__container"
					},
					class: 	"experience__option__title"
				},
				information:{
					description:{
						title:{
							text: 	"Startup saltillense dedicado a reclutar maestros de francés e impartir clases de francés en línea me contrato para desarrollar su plataforma administrativa, la cual servía como intermediario entre alumnos y maestros. Actualmente el startup se encuentra fuera de operación.",
							class: 	"experience__option__information__description"
						},
						class: 	"experience__option__information__description__container"
					},
					duties:{
						title:{
							title:{
								text: 	"Responsabilidades",
								class: 	"experience__option__information__duties__title"
							},
							class: "experience__option__information__duties__title__container",
						},
						options:[
							{
								title:{
									text: 	"Desarrollo de requerimientos",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
							{
								title:{
									text: 	"Desarrollo frontend",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
							{
								title:{
									text: 	"Desarrollo backend",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
							{
								title:{
									text: 	"Pruebas",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
							{
								title:{
									text: 	"Diseño",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
							{
								title:{
									text: 	"Implementación",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
							{
								title:{
									text: 	"Soporte técnico de sistemas",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							}
						],
						optionsClass: 	"experience__option__information__duties__duty",
						class: "experience__option__information__duties"
					},
					location:{
						title:{
							text:  	"Saltillo, Coahuila",
							class: 	"experience__option__information__location"
						},
						class: 	"experience__option__information__location__container"
					},
					class: 	"experience__option__information"
				},
				class: "experience__option"
			},
			{
				title:{
					position:{
						title:{
							text:"Practicante",
							class:"experience__option__title__position"
						},
						class: 	"experience__option__title__position__container"
					},
					company:{
						title:{
							text: 	"Macimex",
							class: 	"experience__option__title__company"
						},
						class: 	"experience__option__title__company__container"
					},
					date:{
						title:{
							text: 	"(Octubre 2012 - Enero 2013)",
							class: 	"experience__option__title__date"
						},
						class: 	"experience__option__title__date__container"
					},
					class: 	"experience__option__title"
				},
				information:{
					description:{
						title:{
							text: 	"Mi primer ambiente laboral real. Entre como practicante en el área de TI, donde desempeñaba (por supuesto, aparte de soporte técnico) como desarrollador de un servicio de intranet. Era un servicio web para noticias de la empresa y su corporativo.",
							class: 	"experience__option__information__description"
						},
						class: 	"experience__option__information__description__container"
					},
					duties:{
						title:{
							title:{
								text: 	"Responsabilidades",
								class: 	"experience__option__information__duties__title"
							},
							class: "experience__option__information__duties__title__container",
						},
						options:[
							{
								title:{
									text: 	"Desarrollo de requerimientos",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
							{
								title:{
									text: 	"Desarrollo frontend",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
							{
								title:{
									text: 	"Desarrollo backend",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
							{
								title:{
									text: 	"Diseño",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							},
							{
								title:{
									text: 	"Soporte técnico",
									class: 	"experience__option__information__duties__duty__title"
								},
								class:"experience__option__information__duties__duty__title__container"
							}
						],
						optionsClass: 	"experience__option__information__duties__duty",
						class: "experience__option__information__duties"
					},
					location:{
						title:{
							text:  	"Ramos Arizpe, Coahuila",
							class: 	"experience__option__information__location"
						},
						class: 	"experience__option__information__location__container"
					},
					class: 	"experience__option__information"
				},
				class: "experience__option"
			},
		],
		classToAnimate: "bounceInUp",
		class:"experience"
	};

	return data;
}])
.factory("knowledgeContent",["globalVariables",function(globalVariables){
	//Variables declaration
	var data={};

	//Content definition
	data={
		title:{
			title:{
				text: 	"Habilidades",
				class: 	"knowledge__title"
			},
			class: 	"knowledge__title__container"
		},
		technologies:{
			types:[
				{
					title:{
						title:{
							text: 	"Tecnologías",
							class: 	"knowledge__technologies__type__title"
						},
						class: 	"knowledge__technologies__type__title__container"
					},
					techs:{
						options:[
							{
								title:{
									title:{
										text: 	"HTML5",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,true],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"CSS3",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,true],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"PHP",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,true],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"MySQL",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,true],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"JSON",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,true],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"Java",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"JavaScript",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"AngularJS",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"Lumx Framework",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"Responsive",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"MVC",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"POO",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"AnimateCSS library",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"SASS",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,false,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"Bootstrap",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,false,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"JQuery",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,false,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"Bower",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,false,false,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"Grunt",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,false,false,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"Node",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,false,false,false,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"Protractor",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,false,false,false,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"RoR",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,false,false,false,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	".NET C#",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,false,false,false,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"SQL",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,false,false,false,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
						],
						class:"knowledge__technologies__type__techs"
					},
					extra:{
						paragraph:{
							title:{
								text: 	"Para este proyecto se utilizó HTML5, CSS3, SASS, JSON, JavaScript, Angular, Lumx, AnimateCSS, JQuery y grunt.",
								class: 	"knowledge__technologies__type__extra__title"
							},
							class: 	"knowledge__technologies__type__extra__title__container"
						},
						link:{
							href: 	"https://github.com/angeldaniel-adcm/CV",
							text: 	"Ver proyecto en Github",
							container: 	"knowledge__technologies__type__extra__link__container",
							class: 	"knowledge__technologies__type__extra__link"
						},
						class:"knowledge__technologies__type__extra"
					},
					class: "knowledge__technologies__type"
				},
				{
					title:{
						title:{
							text: 	"Idiomas",
							class: 	"knowledge__technologies__type__title"
						},
						class: 	"knowledge__technologies__type__title__container"
					},
					techs:{
						options:[
							{
								title:{
									title:{
										text: 	"Español (Nativo)",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,true],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"Ingles (Toefl 627)",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,true],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
						],
						class:"knowledge__technologies__type__techs"
					},
					class: "knowledge__technologies__type"
				},
				{
					title:{
						title:{
							text: 	"Herramientas",
							class: 	"knowledge__technologies__type__title"
						},
						class: 	"knowledge__technologies__type__title__container"
					},
					techs:{
						options:[
							{
								title:{
									title:{
										text: 	"WAMP",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,true],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"MS Office",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,true],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"Sublime Text 2",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"Sublime Text 3",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"Git",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"Dreamweaver 5.5",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"Ilustrador 5.1",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"CorelDraw",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,true,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"Photoshop 5.5",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,false,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},
							{
								title:{
									title:{
										text: 	"Github",
										class: 	"knowledge__technologies__type__techs__tech__title"
									},
									class: 	"knowledge__technologies__type__techs__tech__title__container"
								},
								grades:[true,true,true,false,false],
								gradeClass:"knowledge__technologies__type__techs__tech__grades",
								class: 	"knowledge__technologies__type__techs__tech"
							},

						],
						class:"knowledge__technologies__type__techs"
					},
					class: "knowledge__technologies__type"
				}
			],
			class:"knowledge__technologies"
		},
		classToAnimate: "bounceInUp",
		class: 	"knowledge"
	};

	return data;
}])
.factory("projectsContent",["globalVariables",function(globalVariables){
	//Variables declaration
	var data={};

	//Content definition
	data={
		title:{
			title:{
				text: 	"Proyectos",
				class: 	"projects__title"
			},
			class:"projects__title__container"
		},
		options:[
			{
				title:{
					project:{
						title:{
							text:"Sistema de información",
							class:"projects__option__title__project"
						},
						class: 	"projects__option__title__project__container"
					},
					company:{
						title:{
							text: 	"Dental X-Ray",
							class: 	"projects__option__title__company"
						},
						class: 	"projects__option__title__company__container"
					},
					date:{
						title:{
							text: 	"(Marzo 2016 - Actual)",
							class: 	"projects__option__title__date"
						},
						class: 	"projects__option__title__date__container"
					},
					class: 	"projects__option__title"
				},
				information:{
					description:{
						title:{
							text: 	"Sistema de información para clínica dental para manejo de ingresos, pacientes, doctores, reportes de información, entre otras herramientas.",
							class: 	"projects__option__information__description"
						},
						class: 	"projects__option__information__description__container"
					},
					techs:{
						title:{
							title:{
								text: 	"Tecnologías",
								class: 	"projects__option__information__techs__title"
							},
							class: "projects__option__information__techs__title__container",
						},
						options:[
							{
								title:{
									text: 	"JavaScript",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"AngularJS",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Lumx",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"HTML 5",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"CSS3",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"JQuery",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Responsive",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"PHP OO",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"RESTfull",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"JSON",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"MySQL",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Illustrador",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Photoshop",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Git",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
						],
						optionsClass: 	"projects__option__information__techs__tech",
						class: "projects__option__information__techs"
					},
					noUrl:{
						title:{
							text:  	"En desarrollo",
							class: 	"projects__option__information__no-url__title"
						},
						class: 	"projects__option__information__no-url"
					},
					class: 	"projects__option__information"
				},
				class: "projects__option"
			},
			{
				title:{
					project:{
						title:{
							text:"Página web",
							class:"projects__option__title__project"
						},
						class: 	"projects__option__title__project__container"
					},
					company:{
						title:{
							text: 	"Alfarería el Colibrí",
							class: 	"projects__option__title__company"
						},
						class: 	"projects__option__title__company__container"
					},
					date:{
						title:{
							text: 	"(Marzo 2016)",
							class: 	"projects__option__title__date"
						},
						class: 	"projects__option__title__date__container"
					},
					class: 	"projects__option__title"
				},
				information:{
					description:{
						title:{
							text: 	"Página web informativa para empresa ubicada en Saltillo, Coahuila, dedicada a la venta de producto artesanal hecho con barro a mayoreo y menudeo.",
							class: 	"projects__option__information__description"
						},
						class: 	"projects__option__information__description__container"
					},
					techs:{
						title:{
							title:{
								text: 	"Tecnologías",
								class: 	"projects__option__information__techs__title"
							},
							class: "projects__option__information__techs__title__container",
						},
						options:[
							{
								title:{
									text: 	"JavaScript",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"AngularJS",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Lumx",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"HTML 5",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"CSS3",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"JQuery",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Responsive",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"PHP OO",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"RESTfull",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"JSON",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"MySQL",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Illustrador",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Photoshop",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Git",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Google Analytics",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
						],
						optionsClass: 	"projects__option__information__techs__tech",
						class: "projects__option__information__techs"
					},
					url:{
						title:{
							text:  	"www.alfareriaelcolibri.com",
							class: 	"projects__option__information__url__title"
						},
						link:{
							href: 	"http://www.alfareriaelcolibri.com/",
							target: "_blank",
							class: 	"projects__option__information__url__link"
						},
						class: 	"projects__option__information__url"
					},
					class: 	"projects__option__information"
				},
				class: "projects__option"
			},
			{
				title:{
					project:{
						title:{
							text:"Sistema de información",
							class:"projects__option__title__project"
						},
						class: 	"projects__option__title__project__container"
					},
					company:{
						title:{
							text: 	"NutricionO",
							class: 	"projects__option__title__company"
						},
						class: 	"projects__option__title__company__container"
					},
					date:{
						title:{
							text: 	"(Noviembre 2015 - Marzo 2016)",
							class: 	"projects__option__title__date"
						},
						class: 	"projects__option__title__date__container"
					},
					class: 	"projects__option__title"
				},
				information:{
					description:{
						title:{
							text: 	"Sistema de información para Startup, en Saltillo, Coahuila, dedicado a brindar herramientas para el trabajo de nutriólogos.",
							class: 	"projects__option__information__description"
						},
						class: 	"projects__option__information__description__container"
					},
					techs:{
						title:{
							title:{
								text: 	"Tecnologías",
								class: 	"projects__option__information__techs__title"
							},
							class: "projects__option__information__techs__title__container",
						},
						options:[
							{
								title:{
									text: 	"JavaScript",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"AngularJS",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Lumx",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"HTML 5",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"CSS3",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"JQuery",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Responsive",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"PHP OO",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"RESTfull",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"JSON",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"MySQL",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Illustrador",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Photoshop",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Git",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
						],
						optionsClass: 	"projects__option__information__techs__tech",
						class: "projects__option__information__techs"
					},
					noUrl:{
						title:{
							text:  	"Detenido por falta de recursos",
							class: 	"projects__option__information__no-url__title"
						},
						class: 	"projects__option__information__no-url"
					},
					class: 	"projects__option__information"
				},
				class: "projects__option"
			},
			{
				title:{
					project:{
						title:{
							text:"Actualización",
							class:"projects__option__title__project"
						},
						class: 	"projects__option__title__project__container"
					},
					company:{
						title:{
							text: 	"Mubea USA",
							class: 	"projects__option__title__company"
						},
						class: 	"projects__option__title__company__container"
					},
					date:{
						title:{
							text: 	"(Marzo 2015 - Julio 2015)",
							class: 	"projects__option__title__date"
						},
						class: 	"projects__option__title__date__container"
					},
					class: 	"projects__option__title"
				},
				information:{
					description:{
						title:{
							text: 	"Actualización de sistema de información interno de mejora continua para Mubea USA (Florence, Kentucky). Limitado a dar detalles por políticas de privacidad.",
							class: 	"projects__option__information__description"
						},
						class: 	"projects__option__information__description__container"
					},
					techs:{
						title:{
							title:{
								text: 	"Tecnologías",
								class: 	"projects__option__information__techs__title"
							},
							class: "projects__option__information__techs__title__container",
						},
						options:[
							{
								title:{
									text: 	"JavaScript",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"HTML 5",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"CSS3",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"PHP OO",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"MySQL",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Junos Pulse",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
						],
						optionsClass: 	"projects__option__information__techs__tech",
						class: "projects__option__information__techs"
					},
					noUrl:{
						title:{
							text:  	"Protegido por políticas de privacidad",
							class: 	"projects__option__information__no-url__title"
						},
						class: 	"projects__option__information__no-url"
					},
					class: 	"projects__option__information"
				},
				class: "projects__option"
			},
			{
				title:{
					project:{
						title:{
							text:"Actualización",
							class:"projects__option__title__project"
						},
						class: 	"projects__option__title__project__container"
					},
					company:{
						title:{
							text: 	"Mubea México",
							class: 	"projects__option__title__company"
						},
						class: 	"projects__option__title__company__container"
					},
					date:{
						title:{
							text: 	"(Mayo 2015 - Agosto 2015)",
							class: 	"projects__option__title__date"
						},
						class: 	"projects__option__title__date__container"
					},
					class: 	"projects__option__title"
				},
				information:{
					description:{
						title:{
							text: 	"Actualización de sistema de información interno de mejora continua para Mubea México (Ramos Arizpe, Coahuila). Limitado a dar detalles por políticas de privacidad.",
							class: 	"projects__option__information__description"
						},
						class: 	"projects__option__information__description__container"
					},
					techs:{
						title:{
							title:{
								text: 	"Tecnologías",
								class: 	"projects__option__information__techs__title"
							},
							class: "projects__option__information__techs__title__container",
						},
						options:[
							{
								title:{
									text: 	"JavaScript",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"HTML 5",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"CSS3",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"PHP OO",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"MySQL",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Junos Pulse",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
						],
						optionsClass: 	"projects__option__information__techs__tech",
						class: "projects__option__information__techs"
					},
					noUrl:{
						title:{
							text:  	"Protegido por políticas de privacidad",
							class: 	"projects__option__information__no-url__title"
						},
						class: 	"projects__option__information__no-url"
					},
					class: 	"projects__option__information"
				},
				class: "projects__option"
			},
			{
				title:{
					project:{
						title:{
							text:"Actualización",
							class:"projects__option__title__project"
						},
						class: 	"projects__option__title__project__container"
					},
					company:{
						title:{
							text: 	"SaludC y Servicios de TI",
							class: 	"projects__option__title__company"
						},
						class: 	"projects__option__title__company__container"
					},
					date:{
						title:{
							text: 	"(Febrero 2015)",
							class: 	"projects__option__title__date"
						},
						class: 	"projects__option__title__date__container"
					},
					class: 	"projects__option__title"
				},
				information:{
					description:{
						title:{
							text: 	"Actualización de página web informativa de la empresa SaludC y Servicios de TI. Empresa dedicada al desarrollo de tecnología para el área de Salud (Doctores, dentistas, clínicas, nutriólogos, etc)",
							class: 	"projects__option__information__description"
						},
						class: 	"projects__option__information__description__container"
					},
					techs:{
						title:{
							title:{
								text: 	"Tecnologías",
								class: 	"projects__option__information__techs__title"
							},
							class: "projects__option__information__techs__title__container",
						},
						options:[
							{
								title:{
									text: 	"JavaScript",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"AngularJS",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Lumx",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"HTML 5",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"CSS3",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"JQuery",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Bootstrap",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Responsive",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"PHP OO",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"RESTfull",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"JSON",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"MySQL",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"CorelDraw",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Google Analytics",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Git",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
						],
						optionsClass: 	"projects__option__information__techs__tech",
						class: "projects__option__information__techs"
					},
					url:{
						title:{
							text:  	"www.saludc.com",
							class: 	"projects__option__information__url__title"
						},
						link:{
							href: 	"http://www.saludc.com/",
							target: "_blank",
							class: 	"projects__option__information__url__link"
						},
						class: 	"projects__option__information__url"
					},
					class: 	"projects__option__information"
				},
				class: "projects__option"
			},
			{
				title:{
					project:{
						title:{
							text:"Página web",
							class:"projects__option__title__project"
						},
						class: 	"projects__option__title__project__container"
					},
					company:{
						title:{
							text: 	"SS Agencias de Tramitación",
							class: 	"projects__option__title__company"
						},
						class: 	"projects__option__title__company__container"
					},
					date:{
						title:{
							text: 	"(Enero 2015)",
							class: 	"projects__option__title__date"
						},
						class: 	"projects__option__title__date__container"
					},
					class: 	"projects__option__title"
				},
				information:{
					description:{
						title:{
							text: 	"Página web informativa para Startup ubicado en Saltillo, Coahuila, dedicado a la tramitación de personas mexicanas con registro civil.",
							class: 	"projects__option__information__description"
						},
						class: 	"projects__option__information__description__container"
					},
					techs:{
						title:{
							title:{
								text: 	"Tecnologías",
								class: 	"projects__option__information__techs__title"
							},
							class: "projects__option__information__techs__title__container",
						},
						options:[
							{
								title:{
									text: 	"JavaScript",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"HTML 5",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"CSS3",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"JQuery",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Bootstrap",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Responsive",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"PHP",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"JSON",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"MySQL",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"CorelDraw",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Google Analytics",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
						],
						optionsClass: 	"projects__option__information__techs__tech",
						class: "projects__option__information__techs"
					},
					noUrl:{
						title:{
							text:  	"Startup fuera de operación",
							class: 	"projects__option__information__no-url__title"
						},
						class: 	"projects__option__information__no-url"
					},
					class: 	"projects__option__information"
				},
				class: "projects__option"
			},
			{
				title:{
					project:{
						title:{
							text:"Página web",
							class:"projects__option__title__project"
						},
						class: 	"projects__option__title__project__container"
					},
					company:{
						title:{
							text: 	"SaludC y Servicios de TI",
							class: 	"projects__option__title__company"
						},
						class: 	"projects__option__title__company__container"
					},
					date:{
						title:{
							text: 	"(Octubre 2014)",
							class: 	"projects__option__title__date"
						},
						class: 	"projects__option__title__date__container"
					},
					class: 	"projects__option__title"
				},
				information:{
					description:{
						title:{
							text: 	"Página web informativa de la empresa SaludC y Servicios de TI. Empresa dedicada al desarrollo de tecnología para el área de Salud (Doctores, dentistas, clínicas, nutriólogos, etc)",
							class: 	"projects__option__information__description"
						},
						class: 	"projects__option__information__description__container"
					},
					techs:{
						title:{
							title:{
								text: 	"Tecnologías",
								class: 	"projects__option__information__techs__title"
							},
							class: "projects__option__information__techs__title__container",
						},
						options:[
							{
								title:{
									text: 	"JavaScript",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"HTML 5",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"CSS3",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"JQuery",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Bootstrap",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Responsive",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"PHP",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"JSON",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"MySQL",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"CorelDraw",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Google Analytics",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
						],
						optionsClass: 	"projects__option__information__techs__tech",
						class: "projects__option__information__techs"
					},
					noUrl:{
						title:{
							text:  	"Version no disponible",
							class: 	"projects__option__information__no-url__title"
						},
						class: 	"projects__option__information__no-url"
					},
					class: 	"projects__option__information"
				},
				class: "projects__option"
			},
			{
				title:{
					project:{
						title:{
							text:"Actualización",
							class:"projects__option__title__project"
						},
						class: 	"projects__option__title__project__container"
					},
					company:{
						title:{
							text: 	"Mubea México",
							class: 	"projects__option__title__company"
						},
						class: 	"projects__option__title__company__container"
					},
					date:{
						title:{
							text: 	"(Julio 2014 - Septiembre 2014)",
							class: 	"projects__option__title__date"
						},
						class: 	"projects__option__title__date__container"
					},
					class: 	"projects__option__title"
				},
				information:{
					description:{
						title:{
							text: 	"Actualización de sistema de información interno de mejora continua para Mubea México (Ramos Arizpe, Coahuila). Limitado a dar detalles por políticas de privacidad.",
							class: 	"projects__option__information__description"
						},
						class: 	"projects__option__information__description__container"
					},
					techs:{
						title:{
							title:{
								text: 	"Tecnologías",
								class: 	"projects__option__information__techs__title"
							},
							class: "projects__option__information__techs__title__container",
						},
						options:[
							{
								title:{
									text: 	"JavaScript",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"HTML 5",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"CSS3",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"PHP",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"MySQL",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Junos Pulse",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
						],
						optionsClass: 	"projects__option__information__techs__tech",
						class: "projects__option__information__techs"
					},
					noUrl:{
						title:{
							text:  	"Protegido por políticas de privacidad",
							class: 	"projects__option__information__no-url__title"
						},
						class: 	"projects__option__information__no-url"
					},
					class: 	"projects__option__information"
				},
				class: "projects__option"
			},
			{
				title:{
					project:{
						title:{
							text:"Actualización",
							class:"projects__option__title__project"
						},
						class: 	"projects__option__title__project__container"
					},
					company:{
						title:{
							text: 	"Mubea México",
							class: 	"projects__option__title__company"
						},
						class: 	"projects__option__title__company__container"
					},
					date:{
						title:{
							text: 	"(Diciembre 2013 - Febrero 2014)",
							class: 	"projects__option__title__date"
						},
						class: 	"projects__option__title__date__container"
					},
					class: 	"projects__option__title"
				},
				information:{
					description:{
						title:{
							text: 	"Actualización de sistema de información interno de mejora continua para Mubea México (Ramos Arizpe, Coahuila). Limitado a dar detalles por políticas de privacidad.",
							class: 	"projects__option__information__description"
						},
						class: 	"projects__option__information__description__container"
					},
					techs:{
						title:{
							title:{
								text: 	"Tecnologías",
								class: 	"projects__option__information__techs__title"
							},
							class: "projects__option__information__techs__title__container",
						},
						options:[
							{
								title:{
									text: 	"JavaScript",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"HTML 5",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"CSS3",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"PHP",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"MySQL",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"Junos Pulse",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
						],
						optionsClass: 	"projects__option__information__techs__tech",
						class: "projects__option__information__techs"
					},
					noUrl:{
						title:{
							text:  	"Protegido por políticas de privacidad",
							class: 	"projects__option__information__no-url__title"
						},
						class: 	"projects__option__information__no-url"
					},
					class: 	"projects__option__information"
				},
				class: "projects__option"
			},
			{
				title:{
					project:{
						title:{
							text:"Sistema de Información",
							class:"projects__option__title__project"
						},
						class: 	"projects__option__title__project__container"
					},
					company:{
						title:{
							text: 	"Francés Online",
							class: 	"projects__option__title__company"
						},
						class: 	"projects__option__title__company__container"
					},
					date:{
						title:{
							text: 	"(Mayo 2013 - Agosto 2013)",
							class: 	"projects__option__title__date"
						},
						class: 	"projects__option__title__date__container"
					},
					class: 	"projects__option__title"
				},
				information:{
					description:{
						title:{
							text: 	"Sistema de información para Startup ubicado en Saltillo, Coahuila, dedicado a reclutar maestros de francés e impartir clases a usuarios con deseos de aprender francés.",
							class: 	"projects__option__information__description"
						},
						class: 	"projects__option__information__description__container"
					},
					techs:{
						title:{
							title:{
								text: 	"Tecnologías",
								class: 	"projects__option__information__techs__title"
							},
							class: "projects__option__information__techs__title__container",
						},
						options:[
							{
								title:{
									text: 	"JavaScript",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"HTML 5",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"CSS3",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"JQuery",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"PHP",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
							{
								title:{
									text: 	"MySQL",
									class: 	"projects__option__information__techs__tech__title"
								},
								class:"projects__option__information__techs__tech__title__container"
							},
						],
						optionsClass: 	"projects__option__information__techs__tech",
						class: "projects__option__information__techs"
					},
					noUrl:{
						title:{
							text:  	"Startup fuera de operación",
							class: 	"projects__option__information__no-url__title"
						},
						class: 	"projects__option__information__no-url"
					},
					class: 	"projects__option__information"
				},
				class: "projects__option"
			},
		],
		classToAnimate: "bounceInUp",
		class:"projects"
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