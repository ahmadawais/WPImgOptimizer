/**
 * Gulpfile.
 *
 * Compress Images in WordPress with Gulp. Minifies PNG, JPEG, GIF and SVG images.
 *
 * @author Ahmad Awais ( https://github.com/ahmadawais ), Maedah Batool ( https://github.com/MaedahBatool )
 * @version 1.0.0
 */

 //- START EDITING!
/**
 * Configuration.
 *
 * Project Configuration for gulp tasks.
 *
 * In paths you can add <<glob or array of globs>>.
 * Do NOT change the variable names, just the values.
 */
var imagesSRC         = './assets/img/raw/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,gif,GIF,svg,SVG}'; // Source folder of images which should be optimized.
var imagesDestination = './assets/img/opt/'; // Destination folder of optimized images. Must be different from the imagesSRC folder.
//- STOP EDITING!

/**
 * Load Plugins.
 *
 * Load gulp plugins and assing them semantic names.
 */
var gulp     = require( 'gulp' ); // Gulp of-course
var imagemin = require( 'gulp-imagemin' ); // Minify PNG, JPEG, GIF and SVG images with imagemin.
var notify   = require( 'gulp-notify' ); // Sends message notification to you

/**
 * Task: `imgopt`.
 *
 * Minifies PNG, JPEG, GIF and SVG images.
 *
 * This task does the following:
 *     1. Gets the source of images raw folder
 *     2. Minifies PNG, JPEG, GIF and SVG images
 *     3. Generates and saves the optimized images
 *
 * This task will run only once, if you want to run it
 * again, do it with the command `gulp imgopt`.
 */
gulp.task( 'imgopt', function() {
	gulp.src( imagesSRC )
		.pipe( imagemin({
			progressive: true,
			optimizationLevel: 3, // 0-7 low-high
			interlaced: true,
			svgoPlugins: [{removeViewBox: false}]
		}))
		.pipe( gulp.dest( imagesDestination ) )
		.pipe( notify( { message: 'DONE: Images Optimized! 💯', onLast: true } ) );
} );
