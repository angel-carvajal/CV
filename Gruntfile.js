module.exports=function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jsRoute:"app/include/js/",
		uglify: {
			options:{
				banner: "/*! <%= pkg.name %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
			},
			my_target: {
		        files: {
		        	"<%= jsRoute %>modules/angelRouter.min.js":"<%= jsRoute %>modules/angelRouter.js",
		        	"<%= jsRoute %>services/test.min.js":"<%= jsRoute %>services/test.js"
		        }
		    }
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['uglify']);
	/*grunt.registerTask('logsome', 'Log some stuff.', function() {
		var msg =grunt.config.get('logsome').msg;
		var user =grunt.config.get('logsome').user;
		grunt.log.write(msg+" "+user+" ").ok();
	});*/

};