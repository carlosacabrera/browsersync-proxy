const app = require('./modules/app.module.js');
app.controller('MainCrtl', ['$scope', '$timeout', require('./controllers/main.controller')]);
