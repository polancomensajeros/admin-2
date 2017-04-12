class relaunchModalController {
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

relaunchModalController.$inject = ['$mdDialog', '$scope'];

export {relaunchModalController};
