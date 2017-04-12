class bidModalController {
  constructor($mdDialog, $scope) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    }; 
  }
}

bidModalController.$inject = ['$mdDialog', '$scope'];

export {bidModalController};
