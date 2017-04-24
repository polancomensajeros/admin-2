/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {serviceCardDirective} from './serviceCard.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';


export const serviceCard = angular.module('serviceCard', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('serviceCard', {
      url: '/serviceCard',
      template: '<serviceCard></serviceCard>'
    })
  })
  .directive('serviceCard', serviceCardDirective);
