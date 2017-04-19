/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './messengerMovements.scss';
import {MessengerMovementsController as controller} from './messengerMovements.controller';
import template from './messengerMovements.html';

export const messengerMovementsDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
