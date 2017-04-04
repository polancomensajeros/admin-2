import './serviceCard.scss';
import {ServiceCardController as controller} from './serviceCard.controller';
import template from './serviceCard.html';

export const serviceCardDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
     scope: {
      service: '='
    },
    bindToController: true,
    replace: true,
    restrict: 'E'
  }
};
