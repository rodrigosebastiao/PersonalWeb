module.exports = function (grunt) {
    var sass = require('node-sass');
    grunt.initConfig({
        clean: { //clean build before run
            main: ['build']
        },
        concat: { //concat and build
            js: {
                src: ['src/js/*.js', 'src/js/*.js'],
                dest: 'build/js/script.js',
            },
            css: {
                src: ['src/css/*.css', 'src/css/*.css'],
                dest: 'build/css/styles.css',
            },
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: false
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/scss',
                    src: ['**/*.scss'],
                    dest: 'build/css',
                    ext: '.css'
                }],
            }
        },
        uglify: {
            js: { //my_target
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: ['**/*.js'],
                    dest: 'build/js',
                    ext: '.js'
                }]
            }
        },
        jshint:{
            files: ['Gruntfile.js','src/js/*.js'],
        },
        watch: {
            js: {
                files: 'src/js/*.js',
                tasks: ['default']
            },
            scss: {
                files: 'src/scss/*.scss',
                tasks: ['default']
            },
            GruntChanged: {
                files: 'Gruntfile.js',
                tasks: ['default']
            }
            /*options: {
                livereload: {
                    host: 'localhost',
                    port: 5500,                  
                    //key: grunt.file.read('path/to/ssl.key'),
                    //cert: grunt.file.read('path/to/ssl.crt')
                    // you can pass in any other options you'd like to the https server, as listed here: http://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener
                }
            },*/
        },
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['clean', 'sass', 'jshint', 'uglify','watch']);
};