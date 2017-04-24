/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {serviceInstructionsDirective} from './serviceInstructions.directive';
import angular from 'angular';

export const serviceInstructions = angular.module('serviceInstructions', [])
  .directive('serviceInstructions', serviceInstructionsDirective);
