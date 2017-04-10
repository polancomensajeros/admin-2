import './serviceInstructions.scss';
import {ServiceInstructionsController as controller} from './serviceInstructions.controller';
import template from './serviceInstructions.html';

export const serviceInstructionsDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
