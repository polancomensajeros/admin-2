/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import { api } from './api';
import { titles } from './titles';
import { cities } from './cities.factory';
import { ServiceSession } from './session.factory';
import { zones } from './zones.factory';
import { prices } from './prices.factory';
import { spots } from './spots.factory';
import angular from 'angular';

export const shared = angular.module('shared', [])
  .constant('API', api)
  .factory('Titles', titles)
  .factory('Cities', cities)
  .factory('Zones', zones)
  .factory('Prices', prices)
  .factory('Spots', spots)
  .factory('ServiceSession', ServiceSession);

