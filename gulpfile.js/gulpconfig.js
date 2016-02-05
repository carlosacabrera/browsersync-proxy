
/* Config
--------------------------------------------------- */
var folder = {
	app: 'src/',
	dest: 'public/',
	tmp: '.tmp/',
	bower: 'bower_components/'
};

var technologies = {
	views: 'jade', // availables: jade
	styles: 'scss', // availables: scss
	javascript: 'js', // availables: js
	javascriptVersion: 'es6' // availables: es5, es6
};

var plugins = {
    pattern: ['gulp-*', 'gulp.*', 'run-sequence'], // the glob(s) to search for
    lazy: false // whether the plugins should be lazy loaded on demand
};

module.exports = {

	// Merging...
	folder: folder,
	technologies: technologies,
    plugins: plugins,

	connect: {
		server: {
			base: folder.tmp,
			src: folder.tmp + '**/*',
		},
		prod: {
			base: folder.dest,
			src: folder.dest + '**/*',
		},
		port: 1981,
		open: false,
		notify: true,
		directory: true
	},

	assets: {

		fonts: {
			src: folder.app + 'styles/fonts/*',
			listening: folder.app + 'styles/fonts/*',
			tmp: folder.tmp + 'styles/fonts/',
			dest: folder.dest + 'styles/fonts/'
		},

		images: {
			base: "assets/images/",
			src: folder.app + 'assets/images/**/*.{jpg,jpeg,png,gif,svg}',
			tmp: folder.tmp + 'assets/images/',
			dest: folder.dest + 'assets/images/'
		}

	},

	styles: {
		base: 'styles/',
		src: folder.app + 'styles/*.scss',
		listening: [
			folder.app + 'styles/**/*.scss',
			folder.app + 'views/**/*.scss'
		],
		dest: folder.tmp + 'styles/',
		fonts: folder.app + 'styles/fonts/*',
		fontsDest: folder.tmp + 'styles/fonts/'
	},

	vendor: {
		src: folder.app + 'vendor/**/*',
		dest: folder.tmp + 'vendor/'
	},

	javascript: {
		base: folder.app + 'scripts/',
		src: [
			folder.app + 'scripts/**/*.js',
			folder.app + 'views/**/*.js'
		],
		listening: [
			folder.app + 'scripts/**/*.js',
			folder.app + 'views/**/*.js',
		],
		dest: folder.tmp + 'scripts/'
	},

	templates: {
		src: [
			folder.app + 'views/**/*.' + technologies.views,
			folder.app + 'directives/**/*.' + technologies.views
		],
		base: folder.app + 'views/',
		listen: folder.app + 'views/**/*.' + technologies.views,
		dest: folder.tmp
	}

}


