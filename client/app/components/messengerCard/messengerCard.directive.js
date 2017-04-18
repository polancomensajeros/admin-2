/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 * 
 * Material card with the information of a messenger
 */

import './messengerCard.scss';
import {MessengerCardController as controller} from './messengerCard.controller';
import template from './messengerCard.html';

export const messengerCardDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {
      // Object with the messenger data
      messenger: '=',
      // If actions is the card's action buttons will show
      actions: '='
    },
    bindToController: true,
    replace: true,
    restrict: 'E'
  }
};
