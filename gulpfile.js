// Require Gulp first!
// const gulp = require("gulp");

// // Now that we've installed the terser package we can require it:
// const terser = require("gulp-terser"),
//   rename = require("gulp-rename");
// gulp.task("default", function() {
//   return gulp
//     .src("./js/*.js") // What files do we want gulp to consume?
//     .pipe(terser()) // Call the terser function on these files
//     .pipe(rename({ extname: ".min.js" })) // Rename the uglified file
//     .pipe(gulp.dest("./build/js")); // Where do we put the result?
// });

const gulp = require("gulp");
const uglifycss = require("gulp-uglifycss");
const rename = require("gulp-rename");
const terser = require("gulp-terser");
const browserSync = require("browser-sync").create();
const eslint = require("gulp-eslint");

const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const prettyError = require("gulp-prettyerror");

const babel = require("gulp-babel");
const input = "./build/js/script.min.js";
const output = "build/js";

// Task to compiling and minifying Sass
gulp.task("sass", function() {
  return gulp
    .src(["./sass/*.scss"])
    .pipe(prettyError())
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(gulp.dest("./build/css"))
    .pipe(uglifycss())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(gulp.dest("./build/css"));
});

// js
gulp.task("script", function() {
  return gulp
    .src(["./js/*.js"])
    .pipe(babel())
    .pipe(terser())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(gulp.dest("./build/js"));
});

// Task to watch for changes to CSS files
gulp.task("watch", function(done) {
  gulp.watch("sass/*.scss", gulp.series("sass"));
  gulp.watch("js/*.js", gulp.series("lint-js", "script"));
  done();
});

// Load browsersync

gulp.task("browser-sync", function(done) {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp
    .watch(["build/css/*.css", "build/js/*.js"])
    .on("change", browserSync.reload);
  done();
});

//lint
gulp.task("lint-js", function() {
  return gulp
    .src("./js/*.js")
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task("babel", () => {
  return gulp
    .src(input)
    .pipe(babel())
    .pipe(gulp.dest(output));
});

// default task
gulp.task("default", gulp.parallel("browser-sync", "watch"));
