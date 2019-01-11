'use strict';

var app = angular.module('dashboardApp')

app.controller('GameCtrl', function($scope, $mdDialog) {
  $scope.showPercGraph = function(ev, scopeObj) {
    $mdDialog.show({
      templateUrl: 'app/components/game/percgraph.tmpl.html',
      controller: 'GameCtrl',
      targetEvent: ev,
      clickOutsideToClose: true,
    });
  };
  $scope.showVotePieGraph = function(ev, scopeObj) {
    $mdDialog.show({
      templateUrl: 'app/components/game/votepiegraph.tmpl.html',
      controller: 'GameCtrl',
      targetEvent: ev,
      clickOutsideToClose: true,
    });
  };
  $scope.showHeatMapGraph = function(ev, scopeObj) {
    $mdDialog.show({
      templateUrl: 'app/components/game/heatmap.tmpl.html',
      controller: 'GameCtrl',
      targetEvent: ev,
      clickOutsideToClose: true,
    });
  };
  $scope.showVoteList = function(ev, scopeObj) {
    $mdDialog.show({
      templateUrl: 'app/components/game/votelist.tmpl.html',
      controller: 'GameCtrl',
      targetEvent: ev,
      clickOutsideToClose: true,
    });
  };
  $scope.closeDialog = function() {
    $mdDialog.hide();
  };
});

app.controller('screenShotsCtrl', ['$scope', function($scope) {
  $scope.items = [{
    ss: '/assets/ss/dl_1.jpg',
  }, {
    ss: '/assets/ss/dl_2.jpg',
  }, ]
}]);

app.controller('ourScoreCtrl', ['$scope', function($scope) {
  $scope.items = [{
    game: 'Dying Light',
    cover: '/assets/gamecovers/dying-light.jpg',
    total: 100,
    pros: 5,
    cons: 5,
    time: 1345,
    scorecalc: 50.0,
  }, ]
}]);

// SWAK NOTE (TODO): Chips done this way due to ng-repeat+md-chips issue here: https://github.com/angular/material/issues/2829
// Not sure how you want this to work, we can fake it with a chip-like matching styled class?
// I have left the remaining chips in this section static.

app.controller('chipsDataCtrl', ['$scope', function($scope) {
  $scope.chips = ['Playstation', 'Xbox', 'PC', 'Steam', 'Released'];
}]);

app.controller('viewerRatingsCtrl', ['$scope', function($scope) {
  $scope.items = [{
      type: 'Graphics',
      icon: '/assets/images/ic_gradient_black_24px.svg',
      rating: 7,
      totvotes: 324,
    }, {
      type: 'Sounds',
      icon: '/assets/images/ic_volume_up_black_24px.svg',
      rating: 6,
      totvotes: 153,
    }, {
      type: 'Mechanics',
      icon: '/assets/images/ic_build_black_24px.svg',
      rating: 4,
      totvotes: 244,
    }, {
      type: 'Controls',
      icon: '/assets/images/ic_gamepad_black_24px.svg',
      rating: 3,
      totvotes: 219,
    }, {
      type: 'Story',
      icon: '/assets/images/ic_library_books_black_24px.svg',
      rating: 2,
      totvotes: 124,
    }, {
      type: 'Gameplay',
      icon: '/assets/images/ic_directions_run_black_24px.svg',
      rating: 1,
      totvotes: 233,
    },

  ]
}]);

// SWAK NOTE (TODO): Probably know this, but apostrophe's must be escaped below, something to watch out for.

app.controller('AllCritCtrl', ['$scope', function($scope) {

  $scope.items = [{
    rank: 1,
    criteria: 'Co-op is baked in, entire game can be played with up to 4 others.',
    submitted: 'nimh',
    url: '/nimh',
    categoryname: 'Gameplay',
    category: 'assets/images/ic_directions_run_black_24px.svg',
    type: 'Pro',
    typeurl: 'assets/images/ic_thumb_up_green_24px.svg',
    score: '5',
    videolink: '',
    sslink: '',
  }, {
    rank: 2,
    criteria: 'Only a handful of outfits = little character customization for co-op.',
    submitted: 'nimh',
    url: '/nimh',
    categoryname: 'Gameplay',
    category: 'assets/images/ic_directions_run_black_24px.svg',
    type: 'Con',
    typeurl: 'assets/images/ic_thumb_down_red_24px.svg',
    score: '5',
    videolink: '',
    sslink: '',
  }, {
    rank: 3,
    criteria: 'Swak likes to hang from banisters in hallways.',
    submitted: 'nimh',
    url: '/nimh',
    categoryname: 'Mechanics',
    category: 'assets/images/ic_build_black_24px.svg',
    type: 'Bonus',
    typeurl: 'assets/images/ic_gesture_black_24px.svg',
    score: '5',
    videolink: '',
    sslink: '',
  }, {
    rank: 4,
    criteria: 'Parkour movement is fluid, and leveling up certain skills make it more complex.',
    submitted: 'swak',
    url: '/swak',
    categoryname: 'Controls',
    category: 'assets/images/ic_gamepad_black_24px.svg',
    type: 'Pro',
    typeurl: 'assets/images/ic_thumb_up_green_24px.svg',
    score: '4',
    videolink: '',
    sslink: '',
  }, {
    rank: 5,
    criteria: 'Troy Baker standard voiced protagonist is unmemorable.',
    submitted: 'swak',
    url: '/swak',
    categoryname: 'Sounds',
    category: 'assets/images/ic_volume_up_black_24px.svg',
    type: 'Con',
    typeurl: 'assets/images/ic_thumb_down_red_24px.svg',
    score: '4',
    videolink: '',
    sslink: '',
  }, {
    rank: 6,
    criteria: 'Synchronized flashlights during co-op.',
    submitted: 'swak',
    url: '/swak',
    categoryname: 'Mechanics',
    category: 'assets/images/ic_build_black_24px.svg',
    type: 'Bonus',
    typeurl: 'assets/images/ic_gesture_black_24px.svg',
    score: '4',
    videolink: '',
    sslink: '',
  }, {
    rank: 7,
    criteria: 'Good skill progression, feel stronger and more effective over time.',
    submitted: 'nimh',
    url: '/nimh',
    categoryname: 'Gameplay',
    category: 'assets/images/ic_directions_run_black_24px.svg',
    type: 'Pro',
    typeurl: 'assets/images/ic_thumb_up_green_24px.svg',
    score: '4',
    videolink: '',
    sslink: '',
  }, {
    rank: 8,
    criteria: 'Guns don\'t need to be repaired and can\'t be upgraded or modified.',
    submitted: 'swak',
    url: '/swak',
    categoryname: 'Mechanics',
    category: 'assets/images/ic_build_black_24px.svg',
    type: 'Con',
    typeurl: 'assets/images/ic_thumb_down_red_24px.svg',
    score: '3',
    videolink: '',
    sslink: '',
  }, {
    rank: 9,
    criteria: 'Jade needs to wash her dumb face.',
    submitted: 'nimh',
    url: '/nimh',
    categoryname: 'Graphics',
    category: 'assets/images/ic_gradient_black_24px.svg',
    type: 'Bonus',
    typeurl: 'assets/images/ic_gesture_black_24px.svg',
    score: '3',
    videolink: '',
    sslink: '',
  }, {
    rank: 10,
    criteria: 'Day/Night cycle gives a nice sense of danger and urgency.',
    submitted: 'undeadclown',
    url: '/undeadclown',
    categoryname: 'Mechanics',
    category: 'assets/images/ic_build_black_24px.svg',
    type: 'Pro',
    typeurl: 'assets/images/ic_thumb_up_green_24px.svg',
    score: '3',
    videolink: '',
    sslink: '',
  }, {
    rank: 11,
    criteria: 'Ammo is sold everywhere, capped to max amount, and doesnt take up inventory space.',
    submitted: 'undeadclown',
    url: '/undeadclown',
    categoryname: 'Mechanics',
    category: 'assets/images/ic_build_black_24px.svg',
    type: 'Con',
    typeurl: 'assets/images/ic_thumb_down_red_24px.svg',
    score: '3',
    videolink: '',
    sslink: '',
  }, {
    rank: 12,
    criteria: 'Game makes you swim in poop water a lot.',
    submitted: 'nimh',
    url: '/nimh',
    categoryname: 'Story',
    category: 'assets/images/ic_library_books_black_24px.svg',
    type: 'Bonus',
    typeurl: 'assets/images/ic_gesture_black_24px.svg',
    score: '3',
    videolink: '',
    sslink: '',
  }, {
    rank: 13,
    criteria: 'Creepy as hell while being chased at night, they sound all around you.',
    submitted: 'nimh',
    url: '/nimh',
    categoryname: 'Sounds',
    category: 'assets/images/ic_volume_up_black_24px.svg',
    type: 'Pro',
    typeurl: 'assets/images/ic_thumb_up_green_24px.svg',
    score: '3',
    videolink: '',
    sslink: '',
  }, {
    rank: 14,
    criteria: 'Ending sequence is a quick-time event.',
    submitted: 'swak',
    url: '/swak',
    categoryname: 'Gameplay',
    category: 'assets/images/ic_directions_run_black_24px.svg',
    type: 'Con',
    typeurl: 'assets/images/ic_thumb_down_red_24px.svg',
    score: '3',
    videolink: '',
    sslink: '',
  }, {
    rank: 15,
    criteria: 'Swak can\'t stop burning his nuts in the fire.',
    submitted: 'nimh',
    url: '/nimh',
    categoryname: 'Mechanics',
    category: 'assets/images/ic_build_black_24px.svg',
    type: 'Bonus',
    typeurl: 'assets/images/ic_gesture_black_24px.svg',
    score: '2',
    videolink: '',
    sslink: '',
  }, ]

}]);
