/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

// Class representing a DisponibilityActive

class DisponibilityActiveController {
  constructor($timeout) {
    var self = this;
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
          id: '034412344' + i,
          created: 'Abr 27, 2:00 p.m.',
          start: 'Abr 27, 2:00 p.m.',
          end: 'Abr 27, 2:00 p.m.',
          min: '$45.000',
          acceptance: '85%',
          equipment: 'Maleta',
          spots: '11/13',
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

}

DisponibilityActiveController.$inject = ['$timeout'];

export { DisponibilityActiveController };
