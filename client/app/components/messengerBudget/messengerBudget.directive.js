/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './messengerBudget.scss';
import {MessengerBudgetController as controller} from './messengerBudget.controller';
import template from './messengerBudget.html';

export const messengerBudgetDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
