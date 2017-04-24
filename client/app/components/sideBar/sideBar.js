/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {sideBarDirective} from './sideBar.directive';
import angular from 'angular';

export const sideBar = angular.module('sideBar', [])
  .directive('sideBar', sideBarDirective);
