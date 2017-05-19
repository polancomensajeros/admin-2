/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {api} from './api';
import {titles} from './titles';
import {cities} from './cities/cities.factory';
import {ServiceSession} from './session/session.factory';
import angular from 'angular';

export const shared = angular.module('shared', [])
  .constant('API', api)
  .factory('Titles', titles)
  .factory('Cities', cities)
  .factory('ServiceSession', ServiceSession);

