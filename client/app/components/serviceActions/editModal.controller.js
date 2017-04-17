class editModalController {
  constructor($mdDialog, $scope) {
    $scope.dateTime = new Date();
    $scope.date = new Date();

    $scope.addresses = [];

    for(var i = 0; i < 4; i++){
      $scope.addresses.push({
        name: 'Carrera falsa 123',
        description: 'Chia aute  venmo, keffiyeh labore wolf lomo.  Brunch selfies flannel helvetica'
      });
    }
    
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

editModalController.$inject = ['$mdDialog', '$scope'];

export {editModalController};
