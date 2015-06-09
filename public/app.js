angular
.module('myApp', ['ngRoute'])
.config(config)
.controller('MainCtrl', MainCtrl);

function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main.html',
      controller: MainCtrl,
      controllerAs: 'vm'
    });
}

function MainCtrl() {
  var vm = this;
  this.message = 'Hello world!';
}
