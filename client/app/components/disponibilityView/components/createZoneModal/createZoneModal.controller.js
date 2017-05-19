/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

class createZoneModalController {
  constructor($mdDialog, $timeout, $mdPanel, Cities) {

    this.mdDialog = $mdDialog;
    this.cities = Cities.getState();

  }

  cancel(){
    this.mdDialog.cancel();
  }

}

createZoneModalController.$inject = ['$mdDialog', '$timeout', '$mdPanel', 'Cities'];

export { createZoneModalController };

