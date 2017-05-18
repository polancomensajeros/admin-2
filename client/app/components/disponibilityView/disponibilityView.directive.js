/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './disponibilityView.scss';
import {DisponibilityViewController as controller} from './disponibilityView.controller';
import template from './disponibilityView.html';

export const disponibilityViewDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vmd',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
