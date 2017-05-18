/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {loginViewDirective} from './loginView.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const loginView = angular.module('loginView', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('loginView', {
      url: '/login',
      template: '<login-view></login-view>'
    })
  })
  .directive('loginView', loginViewDirective);
