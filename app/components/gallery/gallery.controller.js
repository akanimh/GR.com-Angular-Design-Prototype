'use strict';

var app = angular.module('dashboardApp')

app.controller('gridListCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.go = function(path) {
    $location.path(path);
  };
  $scope.items = [{
      img: '/assets/gamecovers/dying-light.jpg',
      name: 'Dying Light',
      rating: 50,
      pros: 5,
      cons: 5,
    }, {
      img: '/assets/gamecovers/arma-iii.jpg',
      name: 'Arma 3',
      rating: 89,
      pros: 89,
      cons: 11,
    }, {
      img: '/assets/gamecovers/rust.jpg',
      name: 'Rust',
      rating: 69,
      pros: 69,
      cons: 31,
    }, {
      img: '/assets/gamecovers/space-engineers.jpg',
      name: 'Space Engineers',
      rating: 98,
      pros: 9,
      cons: 2,
    }, {
      img: '/assets/gamecovers/dayz.jpg',
      name: 'DayZ',
      rating: 32,
      pros: 32,
      cons: 68,
    }, {
      img: '/assets/gamecovers/dead-island-2.jpg',
      name: 'Dead Island 2',
      rating: 90,
      pros: 90,
      cons: 10,
    }, {
      img: '/assets/gamecovers/h1z1.jpg',
      name: 'H1Z1',
      rating: 87,
      pros: 77,
      cons: 23,
    }, {
      img: '/assets/gamecovers/super-smash-bros.-brawl.jpg',
      name: 'Super Smash Bros. WiiU',
      rating: 67,
      pros: 67,
      cons: 33,
    }, {
      img: '/assets/gamecovers/the-crew.jpg',
      name: 'The Crew',
      rating: 18,
      pros: 18,
      cons: 82,
    }, {
      img: '/assets/gamecovers/hearthstone.jpg',
      name: 'Hearthstone',
      rating: 95,
      pros: 95,
      cons: 5,
    }, {
      img: '/assets/gamecovers/7-days-to-die.jpg',
      name: '7 Days to Die',
      rating: 82,
      pros: 82,
      cons: 18,
    },

  ]
}]);
