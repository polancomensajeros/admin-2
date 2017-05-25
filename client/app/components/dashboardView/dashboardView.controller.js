/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {Page} from '../../classes/PageClass';
import dashpic from '../../../images/dashboard.png';

class DashboardViewController extends Page{
  constructor(Titles, $rootScope, $cookies, $state) {
    super(true, $cookies, $state);
    $rootScope.transitioningToState = false;
    Titles.setTopbarTitle('Dashboard');
    this.dashpic = dashpic;
  }

}

DashboardViewController.$inject = ['Titles', '$rootScope', '$cookies', '$state'];

export {DashboardViewController};
