/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

// Class representing a MessengerMovements

class MessengerMovementsController {

  constructor($timeout) {
    var self = this;
    this.loadingMovements = true;
    this.selected = [];
    this.query = {
      order: 'name',
      limit: 5,
      page: 1
    };
    this.desserts = [];
    this.start = new Date();
    this.end = new Date();

    $timeout(function () {
      for (let i = 0; i < 10; i++) {
        self.desserts.push({
          service: 'af879as8d77f' + i,
          date: '17-Nov-2016 / 17:23:32',
          description: 'Retención por movimiento',
          price: '4,345.66',
          ammount: '234.00',
          bill: '',
          created: 'Sistema MU'
        });
      }
      self.loadingMovements = false;
    }, 2000);

  }

  success(desserts) {
    this.desserts = desserts;
  }

  getDesserts() {
    this.promise = $nutrition.desserts.get(this.query, this.success).$promise;
  }

}

MessengerMovementsController.$inject = ['$timeout'];

export { MessengerMovementsController };
