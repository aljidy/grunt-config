module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          '*.css' : '*.scss'
        }
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: '.',
          cssDir: '.',
          watch: true
        }
      }
    },
    livereload: {
        options: {
          livereload: true,
          base: './',
          port: 8006,
        },
    },
    uncss: {
      dist: {
        files: {
          'tidy.css': ['*.php']
        }
      }
    },
    
    watch: {
      css: {
        files: '*',
        tasks: ['compass'],
        options: {
          livereload: true,
        },
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-sass');
  //grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default',['compass']);
};