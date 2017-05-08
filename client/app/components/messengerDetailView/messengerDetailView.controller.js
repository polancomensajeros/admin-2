/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

class MessengerDetailViewController {
  constructor(Titles, $rootScope) {
    $rootScope.transitioningToState = false;
    Titles.setTopbarTitle('Detalle del mensajero');
  }

}

MessengerDetailViewController.$inject = ['Titles', '$rootScope'];

export {MessengerDetailViewController};
