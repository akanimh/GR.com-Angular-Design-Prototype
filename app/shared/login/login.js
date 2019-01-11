'use strict';

angular.module('dashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/shared/login/login.html',
        controller: 'LoginCtrl'
      });
  });