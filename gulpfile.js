const { src, dest } = require("gulp");

const sass = require("gulp-sass")(require("sass"));

function css(done) {
  //compilar sass
  //paso: 1 identificar archivos ,2 compilar, 3 guardar el .css
  src("src/scss/app.scss").pipe(sass()).pipe(dest("build/css"));
  done();
}

exports.css = css;
