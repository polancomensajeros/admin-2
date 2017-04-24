/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {messengerDocumentsDirective} from './messengerDocuments.directive';
import angular from 'angular';

export const messengerDocuments = angular.module('messengerDocuments', [])
  .directive('messengerDocuments', messengerDocumentsDirective);
