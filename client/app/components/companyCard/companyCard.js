import {companyCardDirective} from './companyCard.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';


export const companyCard = angular.module('companyCard', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('companyCard', {
      url: '/companyCard',
      template: '<companyCard></companyCard>'
    })
  })
  .directive('companyCard', companyCardDirective);
