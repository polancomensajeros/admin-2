/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './serviceMap.scss';
import {ServiceMapController as controller} from './serviceMap.controller';
import template from './serviceMap.html';

export const serviceMapDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {
      carded : '=',
      mapHeight: '='
    },
    replace: true,
    restrict: 'E',
    bindToController: true
  }
};
