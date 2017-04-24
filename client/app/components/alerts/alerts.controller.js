/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import _ from 'lodash';

// Class representing a Alerts

class AlertsController {
  constructor($timeout) {
    this.timeout = $timeout;
    this.desserts = [];
    this.start = new Date();
    this.end = new Date();
    this.loadingAlerts = true;
    var self = this;
    $timeout(function(){
      for (let i = 0; i < 100; i++) {
      self.desserts.push({
        service: 'af879as8d77f' + i,
        date: '17:15',
        description: 'Sandy',
        price: 'Hernandez Jhonatan',
        ammount: 'Bogotá',
        bill: 'Nadia Alvarez',
        created: 'Domicilios',
        stateStatus: _.random(1, 7)
      });
    }
    self.loadingAlerts = false;
    }, 2000)
  }

  openMenu(menu, delay = 0) {
    this.timeout(function () {
      menu.open();
    }, delay);
  }

}

AlertsController.$inject = ['$timeout'];

export { AlertsController };
