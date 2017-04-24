/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './alertsMap.scss';
import {AlertsMapController as controller} from './alertsMap.controller';
import template from './alertsMap.html';

export const alertsMapDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
