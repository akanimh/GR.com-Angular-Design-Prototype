'use strict';

var app = angular.module('dashboardApp')

app.controller('bottomFabCtrl', function($scope, $timeout, $mdBottomSheet, $mdDialog) {
  // SWAK NOTE: (TODO) I attempted to use a dialog for login from any page, but ran into a serious mobile positioning issue, see: https://trello.com/c/kvAfkcTS
  // $scope.showlogindialog = function(ev, scopeObj) {
  //   $mdDialog.show({
  //     templateUrl: 'components/bottom-fab/logindialog.tmpl.html',
  //     controller: 'bottomFabCtrl',
  //     targetEvent: ev,
  //     clickOutsideToClose: true,
  //   });
  // };
  // $scope.closeDialog = function() {
  //   $mdDialog.hide();
  // };
  $scope.showGridBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: 'app/shared/bottom-fab/bottomsheet.tmpl.html',
      controller: 'GridBottomSheetCtrl',
      targetEvent: $event
    });
  };
});
app.controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [];
  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
});
