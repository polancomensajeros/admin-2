/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import 'openlayers/dist/ol.css';
import openlayers from 'openlayers';
import angular from 'angular';
import {serviceDetailViewDirective} from './serviceDetailView.directive';

// placing an export in front of ar var is the same
// as exporting the var at the end of the file
// using export {varname}
export const serviceDetailView = angular.module('serviceDetailView', [])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/detalle-servicio');

  $stateProvider.state('serviceDetailView', {
    url: '/detalle-servicio',
    template: '<service-detail-view></service-detail-view>'
  });
})
.directive('serviceDetailView', serviceDetailViewDirective);
