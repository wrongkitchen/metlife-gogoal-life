/**
 * Configuration for copy task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('copy', {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= yeogurt.client %>/',
                dest: '<%= yeogurt.dist %>/',
                src: [
                    'bower_components/requirejs/require.js',
                    'bower_components/**/*.{gif,png,jpg}',
                    '!*.js',
                    '*.{ico,png,txt}',
                    'images/**/*.{webp}',
                    'images/*.pdf',
                    'styles/fonts/**/*.{woff,otf,ttf,eot,svg}'
                ]
            }]
        }
    });

};

module.exports = taskConfig;
