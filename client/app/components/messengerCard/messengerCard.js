/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {messengerCardDirective} from './messengerCard.directive';
import angular from 'angular';

export const messengerCard = angular.module('messengerCard', [])
  .directive('messengerCard', messengerCardDirective);
