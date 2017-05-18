/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './loginView.scss';
import {LoginViewController as controller} from './loginView.controller';
import template from './loginView.html';

export const loginViewDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
