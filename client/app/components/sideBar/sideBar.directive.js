import './sideBar.scss';
import {SideBarController as controller} from './sideBar.controller';
import template from './sideBar.html';

export const sideBarDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
