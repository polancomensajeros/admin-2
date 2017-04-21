/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {alertsDirective} from './alerts.directive';
import angular from 'angular';

export const alerts = angular.module('alerts', [])
  .directive('alerts', alertsDirective);
