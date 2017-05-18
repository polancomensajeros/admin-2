/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {disponibilityPricesDirective} from './disponibilityPrices.directive';
import angular from 'angular';

export const disponibilityPrices = angular.module('disponibilityPrices', [])
  .directive('disponibilityPrices', disponibilityPricesDirective);
