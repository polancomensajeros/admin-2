class cancelModalController {
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

cancelModalController.$inject = ['$mdDialog', '$scope'];

export {cancelModalController};
