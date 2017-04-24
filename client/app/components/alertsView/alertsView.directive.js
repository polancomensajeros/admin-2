/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './alertsView.scss';
import {AlertsViewController as controller} from './alertsView.controller';
import template from './alertsView.html';

export const alertsViewDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
