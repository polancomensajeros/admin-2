/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {serviceTimelineDirective} from './serviceTimeline.directive';
import angular from 'angular';

export const serviceTimeline = angular.module('serviceTimeline', [])
  .directive('serviceTimeline', serviceTimelineDirective);
