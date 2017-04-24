/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {alertsViewDirective} from './alertsView.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const alertsView = angular.module('alertsView', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('alertsView', {
      url: '/alertas',
      template: '<alerts-view></alerts-view>'
    })
  })
  .directive('alertsView', alertsViewDirective);
