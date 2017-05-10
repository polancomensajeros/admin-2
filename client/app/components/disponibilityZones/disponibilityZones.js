/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {disponibilityZonesDirective} from './disponibilityZones.directive';
import angular from 'angular';

export const disponibilityZones = angular.module('disponibilityZones', [])
  .directive('disponibilityZones', disponibilityZonesDirective);
