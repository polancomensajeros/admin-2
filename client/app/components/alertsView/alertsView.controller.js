/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {Page} from '../../PageClass';

class AlertsViewController extends Page{
  constructor(Titles, $rootScope, $cookies, $state) {
    super(true, $cookies, $state);
    $rootScope.transitioningToState = 'asd';
    console.log($rootScope.transitioningToState);
    Titles.setTopbarTitle('Alertas');
  }

}

AlertsViewController.$inject = ['Titles', '$rootScope', '$cookies', '$state'];

export {AlertsViewController};
