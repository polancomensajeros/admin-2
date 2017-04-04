import {serviceMapDirective} from './serviceMap.directive';
import angular from 'angular';

export const serviceMap = angular.module('serviceMap', [])
  .directive('serviceMap', serviceMapDirective);
