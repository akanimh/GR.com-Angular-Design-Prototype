'use strict';

angular.module('dashboardApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('game', {
        url: '/game',
        templateUrl: 'app/game/game.html',
        controller: 'GameCtrl',
        sp: {
          waitForUser: true
        }
      });
  });


