'use strict';

angular.module('dashboardApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('admin', {
                url: '/admin',
                templateUrl: 'app/shared/admin/admin.html',
                controller: 'AdminCtrl',
                sp: {
                    authorize: {
                        group: 'Admins'
                    }
                }
            });
    });
