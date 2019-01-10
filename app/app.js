'use strict';

angular.module('dashboardApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'stormpath',
        'stormpath.templates',
        'ngMaterial',
    ])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
        $urlRouterProvider
            .otherwise('/');
        $mdThemingProvider.theme('default')
            .primaryPalette('grey', {
                'hue-3': '900',
            })
            .accentPalette('orange');
        $locationProvider.html5Mode(true);
    })
    .run(function($stormpath) {
        $stormpath.uiRouter({
            loginState: 'login',
            defaultPostLoginState: 'profile'
        });
    });