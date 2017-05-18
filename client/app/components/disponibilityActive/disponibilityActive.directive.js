/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './disponibilityActive.scss';
import {DisponibilityActiveController as controller} from './disponibilityActive.controller';
import template from './disponibilityActive.html';

export const disponibilityActiveDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
