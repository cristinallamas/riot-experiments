module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    // Grunt compiler plugin for riot
     riot: {
       options: {
         concat : true,
       },
       dist: {
         src: [
           'tags/*.tag',
         ],
         dest: 'js/tags.js',
         ext: '.js'
       }
     },
    // Validate files with JSHint
    jshint: {
      files: ['Gruntfile.js', 'js/tags.js']
    },
    // Grunt plugin to output the filesize and gzip size of files
    bytesize: {
    all: {
      src: [
        'js/*'
      ]
    }
  }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-riot');
  grunt.loadNpmTasks('grunt-bytesize');



  // Register tasks
  grunt.registerTask('default', ['compile-riot','jshint','post-build']);
  grunt.registerTask('full', ['riot','jshint']);
  grunt.registerTask('compile-riot', ['riot']);

  grunt.registerTask('post-build', [
  'bytesize'
  ]);


};
