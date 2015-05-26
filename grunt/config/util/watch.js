/**
 * Configuration for watch task(s)
 */
'use strict';

var _ = require('lodash');

var taskConfig = function(grunt) {

    // Configuration
    var config = {
        configFiles: {
            files: [
                'Gruntfile.js',
                'grunt/**/*.js',
                '*.json'
            ],
            options: {
                reload: true,
                interrupt: true
            },
            tasks: [
                'wiredep:all',
                'serve:nowatch'
            ]
        },
        jade: {
            files: [
                '<%= yeogurt.client %>/templates/*.jade'
            ],
            tasks: [
                'newer:jade:server'
            ]
        },
        jadePartials: {
            files: [
                '<%= yeogurt.client %>/templates/**/*.jade',
                '!<%= yeogurt.client %>/templates/*.jade'
            ],
            tasks: [
                'injector:jade',
                'jade:server'
            ]
        },
        sass: {
            files: ['<%= yeogurt.client %>/styles/**/*.{scss,sass}'],
            tasks: [
                'injector:sass',
                'sass:server',
                'autoprefixer:server'
            ]
        },
        injectCss: {
            files: [
                '<%= yeogurt.client %>/styles/**/*.css'
            ],
            tasks: [
                'injector:css',
                'autoprefixer:server'
            ]
        },
        js: {
            files: [
                '<%= yeogurt.client %>/scripts/**/*.js'
            ],
            tasks: [
                'newer:jshint'
            ]
        },
        livereload: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: [
                '<%= yeogurt.client %>/*.{ico,png,txt}',
                '<%= yeogurt.tmp %>/**/*.html',
                '<%= yeogurt.tmp %>/styles/**/*.{css,ttf,otf,woff,svg,eot}',
                '<%= yeogurt.client %>/scripts/**/*.js',
                '<%= yeogurt.client %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        }
    };
    

    grunt.config.set('watch', config);
    

};

module.exports = taskConfig;
