/* Config
--------------------------------------------------- */
var folder = {
  app: 'src/',
  dest: 'dist/'
};

var plugins = {
  pattern: ['gulp-*', 'gulp.*', 'run-sequence'], // the glob(s) to search for
  lazy: false // whether the plugins should be lazy loaded on demand
};

module.exports = {

  // Merging...
  folder: folder,
  plugins: plugins,

	html: {
		src: folder.app + '**/*.html',
		dest: folder.dest
	},

	fonts: {
		src: folder.app + 'fonts/**/*',
		dest: folder.dest + 'fonts/'
	},

	images: {
		src: folder.app + 'images/**/*.{jpg,jpeg,png,gif,svg}',
		dest: folder.dest + 'images/'
	},

  sass: {
    src: folder.app + 'app.scss',
    dest: folder.dest
  },

  javascript: {
    src: folder.app + '**/*.js',
    dest: folder.dest
  }

}
