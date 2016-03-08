angular
.module('myApp', ['ngRoute'])
.config(config)
.controller('MainController', MainController);

config.$inject = ['$routeProvider'];

function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/public/app/main.html',
      controller: MainController,
      controllerAs: 'vm'
    });
}

function MainController() {
  var vm = this;
  vm.message = 'Hello world!';
}
