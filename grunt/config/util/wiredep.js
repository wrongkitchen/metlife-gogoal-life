/**
 * Configuration for wiredep task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('wiredep', {
        all: {
            options: {
                ignorePath: /client\/|\.\.\//g,
                fileTypes: {
                    // Make sure everything has an absolute path
                    jade: {
                        replace: {
                            js: 'script(src=\'/{{filePath}}\')',
                            css: 'link(rel=\'stylesheet\', href=\'/{{filePath}}\')'
                        }
                    }
                },
                // packages to ignore
                exclude: [
                    'bower_components/html5shiv/',
                    'bower_components/consolelog/',
                    'bower_components/modernizr/',
                    'bower_components/requirejs/'
                ],
                overrides: {
                }
            },
            src: [
                '<%= yeogurt.client %>/templates/layouts/base.jade'
            ]
        }
    });

};

module.exports = taskConfig;
