module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      compile: {
        src: ['./public']
      }
    },
    pug: {
      compile: {
        cwd: './frontend',
        src: ['./**/*.pug'],
        dest: './public',
        ext: '.html',
        extDot: 'last',
        expand: true,
        options: {
          doctype: 'html'
        }
      }
    },
    stylus: {
      compile: {
        cwd: './frontend',
        src: ['./styles/**/*.styl'],
        ext: '.css',
        dest: './public',
        expand: true
      }
    },
    uglify: {
      compile: {
        cwd: './frontend',
        src: ['./scripts/**/*.js'],
        dest: './public',
        expand: true
      }
    },
    copy: {
      bower: {
        cwd: './bower_components',
        src: ['./**/*'],
        dest: './public/third-party',
        expand: true
      },
      favicon: {
        cwd: './frontend',
        src: ['./favicon/**/*'],
        dest: './public',
        expand: true
      },
      misc: {
        cwd: './frontend',
        src: ['./misc/**/*'],
        dest: './public',
        expand: true
      }
    },
    watch: {
      pug: {
        files: ['./frontend/**/*.pug'],
        tasks: ['pug']
      },
      stylus: {
        files: ['./frontend/styles/**/*.styl'],
        tasks: ['stylus']
      },
      uglify: {
        files: ['./frontend/scripts/**/*.js'],
        tasks: ['uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('compile', ['pug', 'stylus', 'uglify', 'copy']);
  grunt.registerTask('dev', ['clean', 'compile', 'watch']);
  grunt.registerTask('default', ['clean', 'compile']);
};
