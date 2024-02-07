const { src, dest, watch, series, parallel } = require("gulp");

const sass = require("gulp-sass")(require("sass"));

const postcss = require("gulp-postcss");

const autoprefixer = require("autoprefixer");

function css(done) {
  //compilar sass
  //paso: 1 identificar archivos ,2 compilar, 3 guardar el .css
  src("src/scss/app.scss")
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(dest("build/css"));
  done();
}
function dev() {
  watch("src/scss/**/*.scss", css);
  //   watch("src/scss/app.scss", css);
}

exports.css = css;
exports.dev = dev;
exports.default = series(css, dev);

//series-se inica una tarea y hasta q finaliza inic ala siguiente
//paralell-todas iniciarn al mismo tiempo y van completandose de forma diferente
