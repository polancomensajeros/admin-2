/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './serviceProducts.scss';
import {ServiceProductsController as controller} from './serviceProducts.controller';
import template from './serviceProducts.html';

export const serviceProductsDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
