/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {disponibilitySpotsDirective} from './disponibilitySpots.directive';
import angular from 'angular';

export const disponibilitySpots = angular.module('disponibilitySpots', [])
  .directive('disponibilitySpots', disponibilitySpotsDirective);
