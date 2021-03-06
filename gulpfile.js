const gulp = require("gulp");
const sass = require("gulp-sass");
const html = require("gulp-htmlmin");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
sass.compiler = require("node-sass");

gulp.task("default", watch);

function compilerSass() {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(gulp.dest("src/css"));
}

function htmlMin() {
  return gulp
    .src("src/index.html")
    .pipe(html({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
}

function compilerJs() {
  return gulp
    .src("src/js/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
}

function watch() {
  gulp.watch("src/sass/**/*.scss", compilerSass);
  gulp.watch("src/index.html", htmlMin);
  gulp.watch("src/js/**/*.js", compilerJs);
}
