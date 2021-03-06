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
                dest: 'src/css/styles.css',
            },
        },
        autoprefixer: {
            options: {
                // Task-specific options go here.
            },
            your_target: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['**/*.css'],
                    dest: 'src/css',
                    ext: '.css'
                }],
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
                    dest: 'src/css',
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
        jshint: {
            files: ['Gruntfile.js', 'src/js/*.js'],
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
        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env']
            },
            dist: {
                files: {
                    'dist/app.js': 'src/app.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');
    //require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['sass', 'autoprefixer', 'watch']);
};