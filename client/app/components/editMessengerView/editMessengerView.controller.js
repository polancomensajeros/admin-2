/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

// Class representing a EditMessengerView

class EditMessengerViewController {
  constructor(Titles, $rootScope) {
    $rootScope.transitioningToState = false;
    Titles.setTopbarTitle('Editar información del mensajero');
  }

}

EditMessengerViewController.$inject = ['Titles', '$rootScope'];

export {EditMessengerViewController};
