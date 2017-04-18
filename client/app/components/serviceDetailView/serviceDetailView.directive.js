import './serviceDetailView.scss';
import {ServiceDetailViewController as controller} from './serviceDetailView.controller';
import template from './serviceDetailView.html';

export const serviceDetailViewDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    replace: true,
    scope: {},
    bindToController: true
  };
};
