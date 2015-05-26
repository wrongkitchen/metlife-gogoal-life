/**
 * Builds out an optimised site through minification of CSS and HTML, as well as uglification and optimisation of Javascript.
 */
'use strict';

var taskConfig = function(grunt) {
    grunt.registerTask('build', 'Build a production ready version of your site.', [
        'clean:dist',
        'injector',
        'wiredep:all',
        'copy:dist',
        'concurrent',
        'useminPrepare',
        'concat:generated',
        'cssmin',
        'autoprefixer:server',
        'usemin',
        'htmlmin:dist',
        'uglify',
        'clean:tmp'
    ]);
};

module.exports = taskConfig;
