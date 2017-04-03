import './messengerCard.scss';
import {MessengerCardController as controller} from './messengerCard.controller';
import template from './messengerCard.html';

export const messengerCardDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {
      messenger: '='
    },
    bindToController: true,
    replace: true,
    restrict: 'E'
  }
};
