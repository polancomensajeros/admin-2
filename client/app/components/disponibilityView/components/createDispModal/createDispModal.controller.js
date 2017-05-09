/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

class createDispModalController {
  constructor($mdDialog, $timeout) {
    this.mdDialog = $mdDialog;
    this.timeout = $timeout;
    this.readonly = false;

    this.fruitNames = ['CRV-DG22-BOG', 'FAR-CL12-MED', 'REB-CL100-BOG'];
    this.roFruitNames = angular.copy(this.fruitNames);
    this.editableFruitNames = angular.copy(this.fruitNames);
    this.tags = [];
    this.dateTime = new Date();

    this.min = '$7000';
    this.percentage = '85%'
    this.timeAvg = '30 Min'
    this.programDisp = '2017-06-06 15:34';
  }

  newVeg(chip) {
    return {
      name: chip,
      type: 'unknown'
    };
  }

   openMenu(menu, delay = 0) {
    this.timeout(function () {
      menu.open();
    }, delay);
  }

  hide() {
    this.mdDialog.hide();
  };

  cancel() {
    this.mdDialog.cancel();
  };

  answer(answer) {
    this.mdDialog.hide(answer);
  };

}

createDispModalController.$inject = ['$mdDialog', '$timeout'];

export { createDispModalController };
