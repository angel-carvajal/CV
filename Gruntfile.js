module.exports=function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jsRoute:"app/include/js/",
		styleRoute:"app/include/style/",
		uglify: {
			options:{
				banner: "/*! <%= pkg.name %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
			},
			my_target: {
		        files: {
		        	"<%= jsRoute %>modules/angelRouter.min.js":"<%= jsRoute %>modules/angelRouter.js",
		        	"<%= jsRoute %>modules/navigation.min.js":"<%= jsRoute %>modules/navigation.js",
		        	"<%= jsRoute %>services/navigation.min.js":"<%= jsRoute %>services/navigation.js",
		        	"<%= jsRoute %>services/global.min.js":"<%= jsRoute %>services/global.js",
		        	"<%= jsRoute %>directives/global.min.js":"<%= jsRoute %>directives/global.js",
		        	"<%= jsRoute %>directives/cv.min.js":"<%= jsRoute %>directives/cv.js",
		        	"<%= jsRoute %>modules/cv.min.js":"<%= jsRoute %>modules/cv.js",
		        	"<%= jsRoute %>services/cv.min.js":"<%= jsRoute %>services/cv.js",
		        	
		        }
		    }
		},
		cssmin: {
			options:{
				banner: "hola mundo"
			},
			my_target: {
		        files: {
		        	"<%= styleRoute %>main.min.css":"<%= styleRoute %>main.css",
		        	
		        }
		    }
		}
	});

	// Load the plugin that provides the "uglify" js task .
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Load the plugin that provides the "uglify" css task.
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['uglify','cssmin']);
	/*grunt.registerTask('logsome', 'Log some stuff.', function() {
		var msg =grunt.config.get('logsome').msg;
		var user =grunt.config.get('logsome').user;
		grunt.log.write(msg+" "+user+" ").ok();
	});*/

};