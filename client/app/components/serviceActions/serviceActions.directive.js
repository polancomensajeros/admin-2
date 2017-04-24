/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './serviceActions.scss';
import {ServiceActionsController as controller} from './serviceActions.controller';
import template from './serviceActions.html';

export const serviceActionsDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {
      type : '='
    },
    replace: true,
    restrict: 'E',
    bindToController: true
  }
};
