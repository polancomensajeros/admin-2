/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {messengerMovementsDirective} from './messengerMovements.directive';
import angular from 'angular';

export const messengerMovements = angular.module('messengerMovements', [])
  .directive('messengerMovements', messengerMovementsDirective);
