/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {alertsStatusDirective} from './alertsStatus.directive';
import angular from 'angular';

export const alertsStatus = angular.module('alertsStatus', [])
  .directive('alertsStatus', alertsStatusDirective);
