/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {Page} from '../../PageClass';

class EditMessengerViewController extends Page {
  constructor(Titles, $rootScope, $cookies, $state) {
    super(true, $cookies, $state);
    $rootScope.transitioningToState = false;
    Titles.setTopbarTitle('Editar información del mensajero');
  }

}

EditMessengerViewController.$inject = ['Titles', '$rootScope', '$cookies', '$state'];

export {EditMessengerViewController};
