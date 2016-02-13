const bs = require('browser-sync').create();

module.exports = (function($scope, $timeout) {

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
      open: $scope.openWindow
    });
  };

  $scope.proxyStop = function() {
    bs.exit();
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


});
