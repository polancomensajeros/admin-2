import {topBarDirective} from './topBar.directive';
import angular from 'angular';

export const topBar = angular.module('topBar', [])
  .directive('topBar', topBarDirective);
