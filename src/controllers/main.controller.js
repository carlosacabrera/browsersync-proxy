const bs = require('browser-sync').create();

module.exports = (function($scope, $timeout) {

  // Default values ---
  $scope.sourceURL = 'http://www.carnival.com';
  $scope.proxyURL = null;
  $scope.loading = false;
  $scope.openWindow = true;

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
    $scope.loading = true;
    bs.exit();
  };


  bs.emitter.on('service:running', function(attrs) {
    console.log('service:running', attrs);
    $timeout(function() {
      $scope.loading = false;
      $scope.proxyURL = attrs.urls;
    });
  });

  bs.emitter.on('service:exit', function() {
    $timeout(function() {
      $scope.loading = false;
      $scope.proxyURL = null;
    });
    console.log('service:exit', bs);
  });


});
