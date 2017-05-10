/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './disponibilitySpots.scss';
import {DisponibilitySpotsController as controller} from './disponibilitySpots.controller';
import template from './disponibilitySpots.html';

export const disponibilitySpotsDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
