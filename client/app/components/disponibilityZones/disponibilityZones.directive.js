/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './disponibilityZones.scss';
import {DisponibilityZonesController as controller} from './disponibilityZones.controller';
import template from './disponibilityZones.html';

export const disponibilityZonesDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
