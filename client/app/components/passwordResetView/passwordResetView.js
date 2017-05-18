/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {passwordResetViewDirective} from './passwordResetView.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const passwordResetView = angular.module('passwordResetView', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('passwordResetView', {
      url: '/password-reset',
      template: '<password-reset-view></password-reset-view>'
    })
  })
  .directive('passwordResetView', passwordResetViewDirective);
