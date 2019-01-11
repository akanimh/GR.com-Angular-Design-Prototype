'use strict';

angular.module('dashboardApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('profile', {
                url: '/profile',
                templateUrl: 'app/shared/profile/profile.html',
                controller: 'ProfileCtrl',
                sp: {
                    authenticate: true,
                    waitForUser: true
                }
            });
    });
