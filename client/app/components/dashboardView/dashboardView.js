/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {dashboardViewDirective} from './dashboardView.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const dashboardView = angular.module('dashboardView', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('dashboardView', {
      url: '/dashboard',
      template: '<dashboard-view></dashboard-view>'
    })
  })
  .directive('dashboardView', dashboardViewDirective);
