/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

class ServiceDetailViewController {
  constructor(Titles, $rootScope) {
    $rootScope.transitioningToState = false;
    Titles.setTopbarTitle('Detalle del servicio');
  }
}

ServiceDetailViewController.$inject = ['Titles', '$rootScope'];

export {ServiceDetailViewController};
