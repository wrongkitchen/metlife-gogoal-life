/**
 * Configuration for concurrent task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('concurrent', {
        images: [
            'imagemin:dist',
        ],
        compile: [
            'jade:dist',
            'sass:dist',
            'requirejs'
        ],
    });

};

module.exports = taskConfig;
