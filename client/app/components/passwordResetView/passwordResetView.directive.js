/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './passwordResetView.scss';
import {PasswordResetViewController as controller} from './passwordResetView.controller';
import template from './passwordResetView.html';

export const passwordResetViewDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
