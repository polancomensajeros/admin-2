/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {messengerConfigDirective} from './messengerConfig.directive';
import angular from 'angular';

export const messengerConfig = angular.module('messengerConfig', [])
  .directive('messengerConfig', messengerConfigDirective);
