import './topBar.scss';
import {TopBarController as controller} from './topBar.controller';
import template from './topBar.html';

export const topBarDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    replace: true,
    restrict: 'E'
  }
};
