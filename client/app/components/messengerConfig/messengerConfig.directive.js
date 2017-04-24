/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './messengerConfig.scss';
import {MessengerConfigController as controller} from './messengerConfig.controller';
import template from './messengerConfig.html';

export const messengerConfigDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
