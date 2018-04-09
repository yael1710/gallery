module.exports = function (grunt){

   require('load-grunt-tasks')(grunt);

   grunt.initConfig({
      watch:{
        options: {
          livereload: true
          },
        html:{
          files: ['**/*.html' '**/*.js'],
        },
        grunt:{
          files: ['Gruntfile.js']
          task: ['watch']
        },
     }

   }); 

};
