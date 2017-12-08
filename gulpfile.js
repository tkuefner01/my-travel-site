var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function(){
	console.log("Hurrah, Gulp Task");
});

gulp.task('html', function(){
	console.log("Hier passiert was mit dem HTML");
});

gulp.task('styles', function(){
	console.log("CSS processed");
});

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	})
});

