/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {alertsMapDirective} from './alertsMap.directive';
import angular from 'angular';

export const alertsMap = angular.module('alertsMap', [])
  .directive('alertsMap', alertsMapDirective);
