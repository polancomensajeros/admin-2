import './topBar.scss';
import {TopBarController as controller} from './topBar.controller';
import template from './topBar.html';

export const topBarDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
