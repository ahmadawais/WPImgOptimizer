/**
 * Gulpfile.
 *
 * Gulp with WordPress.
 *
 * Implements:
 *      1. Live reloads browser with BrowserSync.
 *      2. CSS: Sass to CSS conversion, error catching, Autoprefixing, Sourcemaps,
 *         CSS minification, and Merge Media Queries.
 *      3. JS: Concatenates & uglifies Vendor and Custom JS files.
 *      4. Images: Minifies PNG, JPEG, GIF and SVG images.
 *      5. Watches files for changes in CSS or JS.
 *      6. Watches files for changes in PHP.
 *      7. Corrects the line endings.
 *      8. InjectCSS instead of browser page reload.
 *      9. Generates .pot file for i18n and l10n.
 *
 * @author Ahmad Awais (https://github.com/ahmadawais), Maedah Batool (https://github.com/MaedahBatool)
 * @version 1.0.0
 */

/**
 * Configuration.
 *
 * Project Configuration for gulp tasks.
 *
 * In paths you can add <<glob or array of globs>>. Edit the variables as per your project requirements.
 */


// Images related.
var imagesSRC = './assets/img/raw/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,gif,GIF,svg,SVG}'; // Source folder of images which should be optimized.
var imagesDestination = './assets/img/opt/'; // Destination folder of optimized images. Must be different from the imagesSRC folder.

/**
 * Load Plugins.
 *
 * Load gulp plugins and assing them semantic names.
 */
var gulp = require('gulp'); // Gulp of-course

// Image realted plugins.
var imagemin = require('gulp-imagemin'); // Minify PNG, JPEG, GIF and SVG images with imagemin.

// Utility related plugins.
var notify = require('gulp-notify'); // Sends message notification to you

 /**
	* Task: `images`.
	*
	* Minifies PNG, JPEG, GIF and SVG images.
	*
	* This task does the following:
	*     1. Gets the source of images raw folder
	*     2. Minifies PNG, JPEG, GIF and SVG images
	*     3. Generates and saves the optimized images
	*
	* This task will run only once, if you want to run it
	* again, do it with the command `gulp images`.
	*/
gulp.task( 'imgopt', function() {
	gulp.src( imagesSRC )
		.pipe( imagemin( {
					progressive: true,
					optimizationLevel: 3, // 0-7 low-high
					interlaced: true,
					svgoPlugins: [{removeViewBox: false}]
				} ) )
		.pipe(gulp.dest( imagesDestination ))
		.pipe( notify( { message: 'DONE: Images Optimized! 💯', onLast: true } ) );
});
