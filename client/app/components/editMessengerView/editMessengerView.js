/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {editMessengerViewDirective} from './editMessengerView.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const editMessengerView = angular.module('editMessengerView', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('editMessengerView', {
      url: '/editar-mensajero',
      template: '<edit-messenger-view></edit-messenger-view>'
    })
  })
  .directive('editMessengerView', editMessengerViewDirective);
