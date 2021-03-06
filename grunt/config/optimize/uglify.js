/**
 * Configuration for uglify task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('uglify', {
        generated: {
            options: {
                mangle: true,
                preserveComments: 'some',
            }
        },
        dist: {
            options: {
                mangle: true,
                preserveComments: 'some',
                sourceMap: true,
                sourceMapIncludeSources: true
            },
            expand: true,
            cwd: '<%= yeogurt.dist %>/bower_components/',
            dest: '<%= yeogurt.dist %>/bower_components/',
            src: [
                'requirejs/require.js'
            ],
            ext: '.js'
        }
    });

};

module.exports = taskConfig;
