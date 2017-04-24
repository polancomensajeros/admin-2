/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './messengerServices.scss';
import {MessengerServicesController as controller} from './messengerServices.controller';
import template from './messengerServices.html';

export const messengerServicesDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
