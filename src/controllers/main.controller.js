const browserSync = require('browser-sync');

module.exports = (function($scope, $timeout) {

  // Default values ---
  $scope.running = false;
  $scope.sourceURL = '';
  $scope.proxyURL = null;
  $scope.loading = false;

  $scope.settings = {
    openWindow: false,
    clicks: true,
    forms: true,
    scroll: true
  };

  // methods ---

  $scope.proxyStart = function() {
    $scope.loading = true;

    $scope.bs = browserSync.create();

    $scope.bs.init({
      proxy: $scope.sourceURL,
      open: $scope.settings.openWindow,
      ghostMode: {
        clicks: $scope.settings.clicks,
        forms: $scope.settings.forms,
        scroll: $scope.settings.scroll
      }
    }, function(err, _bs) {
      var urls = _bs.options.get('urls')._root.entries;
      console.log('RUNNING', urls);
      $timeout(function() {
        $scope.loading = false;
        $scope.running = true;
        $scope.proxyURL = urls;
      });


      _bs.events.on('service:exit', function() {
        console.log('EXIT');
        $timeout(function() {
          $scope.loading = false;
          $scope.running = false;
          $scope.proxyURL = null;
        });
      });
    });

  };

  $scope.proxyStop = function() {
    $scope.loading = true;
    $scope.bs.exit();
  };





});
