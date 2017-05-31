/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {Page} from '../../classes/PageClass';

class MessengerDetailViewController extends Page{
  constructor(Titles, $rootScope, $cookies, $state) {
    super(true, $cookies, $state);
    $rootScope.transitioningToState = false;
    Titles.setTopbarTitle('Detalle del mensajero');
  }

}

MessengerDetailViewController.$inject = ['Titles', '$rootScope', '$cookies', '$state'];

export {MessengerDetailViewController};
