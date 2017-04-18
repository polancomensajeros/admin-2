/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {messengerBudgetDirective} from './messengerBudget.directive';
import angular from 'angular';

export const messengerBudget = angular.module('messengerBudget', [])
  .directive('messengerBudget', messengerBudgetDirective);
