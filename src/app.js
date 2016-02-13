'use strict';

const electron = require('electron');
const app = electron.app; // Module to control application life.
const BrowserWindow = electron.BrowserWindow; // Module to create native browser window.
const bs = require('browser-sync').create('browsersyncApp');
const ngApp = angular.module('app', [
  'ngMessages'
]);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 400
  });

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  ngApp.controller('ProxyController', ['$scope', '$timeout', function($scope, $timeout) {


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


});
