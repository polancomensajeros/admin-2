/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './serviceTimeline.scss';
import {ServiceTimelineController as controller} from './serviceTimeline.controller';
import template from './serviceTimeline.html';

export const serviceTimelineDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
