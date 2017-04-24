/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

// Class representing a AlertsView

class AlertsViewController {
  constructor(Titles) {
    Titles.setTopbarTitle('Alertas');
  }

}

AlertsViewController.$inject = ['Titles'];

export {AlertsViewController};
