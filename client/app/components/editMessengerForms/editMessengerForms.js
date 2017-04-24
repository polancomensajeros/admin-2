/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {editMessengerFormsDirective} from './editMessengerForms.directive';
import angular from 'angular';

export const editMessengerForms = angular.module('editMessengerForms', [])
  .directive('editMessengerForms', editMessengerFormsDirective);
