module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
             dist: {
                src: [
                    'js/jquery.min.js','js/*.js', 'js/*.min.js' // All JS in the libs folder
                 
                ],
                dest: 'js/build/production.js',
            }
        },
        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/'
                }]
            }
        },
        autoprefixer: {
            dist: {
                files: {
                    'css/style.css': 'css/style.css'
                }
            }
        },
        uncss: {
          dist: {
            files: {
              'build/css/tidy.css': ['index.html']
            }
          }
        },
        processhtml: {
          dist: {
            files: {
              'build/index.html': ['index.html']
            }
          }
        },
       cssmin: {
          target: {
            files: {
                'build/css/output.css': ['css/*.css', 'css/*.min.css']
            },
            files: [{
              expand: true,
              cwd: 'css',
              src: ['build/css/output.css'],
              dest: 'build/css',
              ext: '.min.css'
            }]
          }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'uncss','processhtml','autoprefixer','cssmin']);

};