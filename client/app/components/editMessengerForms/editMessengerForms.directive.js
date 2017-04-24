/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './editMessengerForms.scss';
import {EditMessengerFormsController as controller} from './editMessengerForms.controller';
import template from './editMessengerForms.html';

export const editMessengerFormsDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
