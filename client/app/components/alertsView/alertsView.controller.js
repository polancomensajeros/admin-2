/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

// Class representing a AlertsView

class AlertsViewController {
  constructor(Titles, $rootScope) {
    $rootScope.transitioningToState = 'asd';
    console.log($rootScope.transitioningToState);
    Titles.setTopbarTitle('Alertas');
  }

}

AlertsViewController.$inject = ['Titles', '$rootScope'];

export {AlertsViewController};
