/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {messengerDetailViewDirective} from './messengerDetailView.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';


export const messengerDetailView = angular.module('messengerDetailView', [uiRouter])
  // Every component is created as an independent view, if you dont need it to
  // be a view remove the state below
  .config(($stateProvider) => {
    $stateProvider.state('messengerDetailView', {
      url: '/messengerDetailView',
      template: '<messenger-detail-view></messenger-detail-view>'
    })
  })
  .directive('messengerDetailView', messengerDetailViewDirective);
