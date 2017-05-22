/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './createZoneMap.scss';
import {CreateZoneMapController as controller} from './createZoneMap.controller';
import template from './createZoneMap.html';

export const createZoneMapDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
