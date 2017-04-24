/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './messengerDocuments.scss';
import {MessengerDocumentsController as controller} from './messengerDocuments.controller';
import template from './messengerDocuments.html';

export const messengerDocumentsDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
