/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './editMessengerMenu.scss';
import {EditMessengerMenuController as controller} from './editMessengerMenu.controller';
import template from './editMessengerMenu.html';

export const editMessengerMenuDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
