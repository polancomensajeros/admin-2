/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {disponibilityActiveDirective} from './disponibilityActive.directive';
import angular from 'angular';

export const disponibilityActive = angular.module('disponibilityActive', [])
  .directive('disponibilityActive', disponibilityActiveDirective);
