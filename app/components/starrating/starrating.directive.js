'use strict';

angular.module('dashboardApp')
  .controller('RatingCtrl', function($scope) {
    $scope.rating = 5;
  })
  .directive('starRating',
    function() {
      return {
        restrict: 'A',
        template: '<ul class="rating">' + '	<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' + '<md-icon md-svg-src="assets/images/ic_whatshot_black_24px.svg" class="star" alt=""></md-icon>' + '</li>' + '</ul>',
        scope: {
          ratingValue: '=',
          max: '=',
          onRatingSelected: '&'
        },
        link: function(scope, elem, attrs) {
          var updateStars = function() {
            scope.stars = [];
            for (var i = 0; i < scope.max; i++) {
              scope.stars.push({
                filled: i < scope.ratingValue
              });
            }
          };

          scope.toggle = function(index) {
            scope.ratingValue = index + 1;
            scope.onRatingSelected({
              rating: index + 1
            });
          };

          scope.$watch('ratingValue',
            function(oldVal, newVal) {
              if (newVal) {
                updateStars();
              }
            }
          );
        }
      };
    }
  );

// Sourced: http://jsfiddle.net/prash/G3UCK/378/light/
