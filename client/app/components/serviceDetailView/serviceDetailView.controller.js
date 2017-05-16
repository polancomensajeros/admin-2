/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */
import {Page} from '../../PageClass';
class ServiceDetailViewController extends Page{
  constructor(Titles, $rootScope, $cookies, $state) {
    super(true, $cookies, $state);
    $rootScope.transitioningToState = false;
    Titles.setTopbarTitle('Detalle del servicio');
  }
}

ServiceDetailViewController.$inject = ['Titles', '$rootScope', '$cookies', '$state'];

export {ServiceDetailViewController};
