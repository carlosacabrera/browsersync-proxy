var packager = require('electron-packager');
var settings = require('../package.json');
var fs = require('fs');

var opts = {
  'dir': '.',
  'arch': 'x64',
  'platform': ['darwin'],
  'app-category-type': 'public.app-category.developer-tools',
  'app-version': settings.version,
  'asar': false,
  'version': settings.devDependencies['electron-prebuilt'],
  'icon': '../icon',
  'name': settings.name,
  'out': './releases',
  'overwrite': true,
  'prune': true,
  'ignore': [
    '.git',
    '.DS_Store',
    '.gitignore',
    'v8.log',
    /^\/gulpfile.js/,
    /^\/test/,
    /^\/src/,
    /^\/lib/
  ]
}

for (key in settings.devDependencies) {
  var regex = new RegExp('^\/node_modules/' + key);
  opts.ignore.push(regex);
}

console.log('\n ... wait for it ...\n');

packager(opts, function done(err, appPath) {
  if (err) {
    console.error('\n¯\_(ツ)_/¯ Oops! I made a boo-boo', err);
    return;
  }
  console.log('\n【ツ】Build completed');
  for (var i = 0; i < appPath.length; i++) {
    console.log('\t' + appPath[i] + ' (' + getFilesizeInBytes(appPath[i]) + 'mb)\n');
  }
});

function getFilesizeInBytes(filename) {
  var stats = fs.statSync(filename)
  var fileSizeInBytes = stats['size']
  return fileSizeInBytes
}
