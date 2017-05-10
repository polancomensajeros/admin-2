/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

// Class representing a DisponibilitySpots element

class DisponibilitySpotsController {
  constructor($timeout, $mdDialog, $mdPanel) {
    var self = this;
    this.mdDialog = $mdDialog;
    this.timeout = $timeout;
    this.loadingDisponibilities = true;
    this.selected = [];
    this.query = {
      order: 'name',
      limit: 5,
      page: 1
    };
    this.disponibilities = [];
    this.start = new Date();
    this.end = new Date();
    $timeout(function () {
      for (let i = 0; i < 10; i++) {
        self.disponibilities.push({
          id: 'CRV-DG22-BOG' + i,
          created: '8465241',
          start: 'Cruz verde La chucua',
          end: 'Calle falsa 123',
          min: 'Cruz verde',
          acceptance: 'Bogotá',
          equipment: '$2000',
          spots: '445 654458',
          zones: '1'
        });
      }
      self.loadingDisponibilities = false;
    }, 1200);
  }

  success(desserts) {
    this.desserts = desserts;
  }

  getDesserts() {
    this.promise = $nutrition.desserts.get(this.query, this.success).$promise;
  }

  closeModal() {
    this.mdDialog.hide();
  }

  testingModals(ev, template, controller) {
    const self = this;
    this.mdDialog.show({
      controller: controller,
      controllerAs: 'vm',
      template: template,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: true
    })
      .then(function (answer) {
        console.log(answer);
      }, function () {
        console.log('Dialog closed');
      });
  }

  openMenu(menu, delay = 0) {
    this.timeout(function () {
      menu.open();
    }, delay);
  }

}

DisponibilitySpotsController.$inject = ['$timeout', '$mdDialog', '$mdPanel'];

export { DisponibilitySpotsController };
