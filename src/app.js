// Modules --
var bs = require('browser-sync').create('browsersyncApp');

// Load native UI library
var gui = require('nw.gui'); //or global.window.nwDispatcher.requireNwGui() (see https://github.com/rogerwang/node-webkit/issues/707)

// Get the current window
var win = gui.Window.get();

//  UI --
var app = angular.module('app', [
  'ngMessages'
]);

app.controller('ProxyController', ['$scope', '$timeout', function($scope, $timeout) {


  // Default values ---
  $scope.sourceURL = 'http://www.carnival.com';
  $scope.proxyURL = null;
  $scope.loading = false;
  $scope.openWindow = false;

  // Emitter listeners ---


  // methods ---

  $scope.proxyStart = function() {
    $scope.loading = true;
    bs.init({
      proxy: $scope.sourceURL,
      // ws: true,
      open: $scope.openWindow
    });
  };

  $scope.proxyStop = function() {
    bs.exit();
  };

  // Window --
  $scope.close = function() {
    win.close();
  };
  $scope.minimize = function() {
    win.minimize();
  };


  bs.emitter.on('service:running', function(attrs) {
    $timeout(function() {
      $scope.loading = false;
      $scope.proxyURL = attrs.urls;
    });
    console.log('service:running', attrs);
  });

  bs.emitter.on('service:exit', function(attrs) {
    $timeout(function() {
      $scope.proxyURL = null;
    });
    console.log('service:exit', attrs);
  });



}]);
