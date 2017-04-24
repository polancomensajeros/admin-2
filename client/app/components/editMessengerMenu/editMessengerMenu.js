/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {editMessengerMenuDirective} from './editMessengerMenu.directive';
import angular from 'angular';

export const editMessengerMenu = angular.module('editMessengerMenu', [])
  .directive('editMessengerMenu', editMessengerMenuDirective);
