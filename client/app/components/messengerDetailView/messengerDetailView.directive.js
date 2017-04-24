/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './messengerDetailView.scss';
import {MessengerDetailViewController as controller} from './messengerDetailView.controller';
import template from './messengerDetailView.html';

export const messengerDetailViewDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
