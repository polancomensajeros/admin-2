/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {api} from './api';
import {titles} from './titles';
import {ServiceSession} from './session/serviceSession';
import angular from 'angular';

export const shared = angular.module('shared', [])
  .constant('API', api)
  .factory('Titles', titles)
  .factory('ServiceSession', ServiceSession);

