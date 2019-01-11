'use strict';

angular.module('dashboardApp', [
        'ui.router',
        'stormpath',
        'stormpath.templates',
        'ngMaterial',
    ])
    .config(function($locationProvider, $mdThemingProvider) {
        $locationProvider.html5Mode(true);
        $mdThemingProvider.theme('default')
            .primaryPalette('grey', {
                'hue-3': '900',
            })
            .accentPalette('orange');

    });
