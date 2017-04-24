/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {serviceProductsDirective} from './serviceProducts.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';


export const serviceProducts = angular.module('serviceProducts', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('serviceProducts', {
      url: '/serviceProducts',
      template: '<serviceProducts></serviceProducts>'
    })
  })
  .directive('serviceProducts', serviceProductsDirective);
