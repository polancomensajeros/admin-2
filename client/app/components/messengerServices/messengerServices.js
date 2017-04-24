/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {messengerServicesDirective} from './messengerServices.directive';
import angular from 'angular';

export const messengerServices = angular.module('messengerServices', [])
  .directive('messengerServices', messengerServicesDirective);
