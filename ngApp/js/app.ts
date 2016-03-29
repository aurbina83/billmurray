'use strict';
namespace app {
  angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap'])
    .config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $stateProvider.state('Home', {
      url: '/',
      templateUrl: '/templates/home.jade',
      controller: app.Controllers.HomeController,
      controllerAs: 'vm'
  })
  .state('Bill', {
      url:'/bill',
      templateUrl: '/templates/bill.html',
      controller: 'BillController',
      controllerAs: 'vm'
  })
  .state('Create', {
      url: '/create',
      templateUrl: '/templates/create.html',
      controller: 'CreateController',
      controllerAs: 'vm'
  })
  .state('Details', {
      url:'/details/:id',
      templateUrl:'/templates/details.html',
      controller: 'DetailController',
      controllerAs: 'vm'
  })
  .state('Update Bill', {
      url: '/update/:id',
      templateUrl: 'templates/update.html',
      controller: 'UpdateController',
      controllerAs: 'vm'
  });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
}
