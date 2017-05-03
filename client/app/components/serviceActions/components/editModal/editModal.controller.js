/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

class editModalController {
  constructor($mdDialog) {
    this.mdDialog = $mdDialog;
    this.dateTime = new Date();
    this.date = new Date();

    this.addresses = [];

    for (var i = 0; i < 4; i++) {
      this.addresses.push({
        name: 'Carrera falsa 123',
        description: 'Chia aute  venmo, keffiyeh labore wolf lomo.  Brunch selfies flannel helvetica'
      });
    }
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

editModalController.$inject = ['$mdDialog'];

export { editModalController };
