import './companyCard.scss';
import {CompanyCardController as controller} from './companyCard.controller';
import template from './companyCard.html';

export const companyCardDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
