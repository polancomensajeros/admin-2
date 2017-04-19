/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './alertsStatus.scss';
import {AlertsStatusController as controller} from './alertsStatus.controller';
import template from './alertsStatus.html';

export const alertsStatusDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
