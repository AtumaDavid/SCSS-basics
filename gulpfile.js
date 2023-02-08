const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
  // return src("index.scss").pipe(sass()).pipe(dest("css"));
  return src("sass-folder/**/*.scss")
    .pipe(sass())
    .pipe(purgecss({ content: ["*.html"] }))
    .pipe(dest("css"));
}

function watchTask() {
  // watch(["index.scss"], buildStyles);
  watch(["sass-folder/**/*.scss", "*.html"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
