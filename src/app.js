require('angular');
// require('angular-messages');

const app = angular.module('app', []);

app.controller('MainCrtl', ['$scope', '$timeout', require('./controllers/main.controller')]);
