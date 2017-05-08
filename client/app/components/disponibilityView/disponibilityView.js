/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {disponibilityViewDirective} from './disponibilityView.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const disponibilityView = angular.module('disponibilityView', [uiRouter])
  // Every component is created as an independent view, if you dont need it to
  // be a view remove the state below
  .config(($stateProvider) => {
    $stateProvider.state('disponibilityView', {
      url: '/disponibilidades',
      // If you're using a complex component name like: complexComponentName
      // the tag for the component will be: 
      // <complexComponentName></complexComponentName>
      // If you try to acces the route is not going to work, you have to change
      // the tag to <complex-component-name></complex-component-name>
      template: '<disponibility-view></disponibility-view>'
    })
  })
  .directive('disponibilityView', disponibilityViewDirective);
