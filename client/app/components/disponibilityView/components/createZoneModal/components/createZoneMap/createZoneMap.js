/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {createZoneMapDirective} from './createZoneMap.directive';
import angular from 'angular';

export const createZoneMap = angular.module('createZoneMap', [])
  .directive('createZoneMap', createZoneMapDirective);
