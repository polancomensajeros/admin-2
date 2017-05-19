/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './dashboardView.scss';
import {DashboardViewController as controller} from './dashboardView.controller';
import template from './dashboardView.html';

export const dashboardViewDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vmd',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
