import {serviceActionsDirective} from './serviceActions.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

export const serviceActions = angular.module('serviceActions', [uiRouter, ngMaterial])
  .directive('serviceActions', serviceActionsDirective);
