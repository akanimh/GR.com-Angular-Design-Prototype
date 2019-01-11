'use strict';

angular.module('dashboardApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('game', {
        url: '/game',
        templateUrl: 'app/components/game/game.html',
        controller: 'GameCtrl',
        sp: {
          waitForUser: true
        }
      });
  });


