'use strict';

angular.module('dashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: 'app/shared/register/register.html',
        controller: 'RegisterCtrl'
      });
  });