/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import './app.scss';
import template from './app.html';

export const appDirective = ()=> {
  return {
    template,
    restrict: 'E',
    scope: {},
    replace: true
  };
};
