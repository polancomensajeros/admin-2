/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './editMessengerView.scss';
import {EditMessengerViewController as controller} from './editMessengerView.controller';
import template from './editMessengerView.html';

export const editMessengerViewDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
