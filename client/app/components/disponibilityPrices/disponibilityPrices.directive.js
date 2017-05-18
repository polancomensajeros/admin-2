/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './disponibilityPrices.scss';
import {DisponibilityPricesController as controller} from './disponibilityPrices.controller';
import template from './disponibilityPrices.html';

export const disponibilityPricesDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
