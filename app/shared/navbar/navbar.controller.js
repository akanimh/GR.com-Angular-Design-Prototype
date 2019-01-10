'use strict';

var app = angular.module('dashboardApp')

app.controller('NavListCtrl', function($scope, $mdSidenav, $location) {
  $scope.menu = [{
    'title': 'Roasts',
    'link': '/'
  }];

  $scope.isActive = function(route) {
    return route === $location.path();
  };
});


app.controller('NavCtrl', function($scope, $mdSidenav) {

  $scope.toggleSidenav = toggleSidenav;
  $scope.selectLink = selectLink;

  function toggleSidenav(name) {
    $mdSidenav(name).toggle();
  }

  //Selected link closes sidenav 
  function selectLink(Link) {
    $scope.toggleSidenav('left');
  }

});

app.controller('rightNavCtrl', function($scope, $mdDialog) {
  var originatorEv;
  this.openMenu = function($mdOpenMenu, ev) {
    originatorEv = ev;
    $mdOpenMenu(ev);
  };
  $scope.items = [
        {
            option:'Menu 1',
        },
        {
            option:'Menu 2',
        },
        {
            option:'Menu 3',
        },
        ]
});
