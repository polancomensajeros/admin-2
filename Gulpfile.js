var gulp    = require('gulp');
var sync    = require('run-sequence');
var browser = require('browser-sync');
var webpack = require('webpack-stream');
var path    = require('path');
var yargs   = require('yargs').argv;
var tpl     = require('gulp-template');
var rename  = require('gulp-rename');
var express = require('express');
var proxy   = require('express-http-proxy');
var app     = require('express')();

app.use('/remoteapi', proxy('http://dev.api.mensajerosurbanos.com/'));
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

/*
map of paths for using with the tasks below
 */
var paths = {
  entry: 'client/app/app.js',
  app: ['client/app/**/*.{js,scss,html}', 'client/styles/**/*.scss'],
  js: 'client/app/**/*!(.spec.js).js',
  sass: ['client/app/**/*.scss', 'client/style/**/*.scss'],
  toCopy: ['client/index.html', 'client/manifest.json', 'client/sw.js', 'client/icons/icon-128-128.png', 'client/icons/icon-256-256.png', 'client/icons/icon-512-512.png', 'client/scripts/moment.js'],
  html: ['client/index.html', 'client/app/**/*.html'],
  dest: 'dist',
  blankTemplates: 'templates/component/*.**'
};

// helper funciton
var resolveToComponents = function(glob){
  glob = glob || '';
  return path.join('client', 'app/components', glob); // app/components/{glob}
};

gulp.task('build', [], function() {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('serve', function() {
  app.listen(3000, function(){
    console.log('expressing!!')
  });

  /*browser({
    port: process.env.PORT || 4500,
    open: false,
    ghostMode: {
      clicks: true,
      forms: true,
      scroll: false
    },
    server: {
      baseDir: 'dist'
    }
  });*/

});

/*
simple task to copy over needed files to dist
 */
gulp.task('copy', function() {
  return gulp.src(paths.toCopy, { base: 'client' })
    .pipe(gulp.dest(paths.dest));
});

/*
task to watch files for changes and call build and copy tasks
 */
gulp.task('watch', function() {
  gulp.watch(paths.app, ['build', browser.reload]);
  gulp.watch(paths.toCopy, ['copy', browser.reload]);
});

gulp.task('component', function(){
  var cap = function(val){
    return val.charAt(0).toUpperCase() + val.slice(1);
  };

  var name = yargs.name;
  var parentPath = yargs.parent || '';
  var destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(paths.blankTemplates)
    .pipe(tpl({
      name: name,
      upCaseName: cap(name)
    }))
    .pipe(rename(function(path){
      path.basename = path.basename.replace('component', name);
    }))
    .pipe(gulp.dest(destPath));
});


gulp.task('default', function(done) {
  sync('build', 'copy', 'serve', 'watch', done)
});
