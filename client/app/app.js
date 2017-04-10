import 'normalize.css';
import 'angular-material/angular-material.min.css';
import {appDirective} from './app.directive';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import ngMaterial from 'angular-material';
// External dependencies
import openLayersDirective from 'angular-openlayers-directive';
// Layout 
import {sideBar} from './components/sideBar/sideBar';
import {topBar} from './components/topBar/topBar';
// Views
import {home} from './components/home/home';
// Service
import {messengerCard} from './components/messengerCard/messengerCard';
import {serviceCard} from './components/serviceCard/serviceCard';
import {serviceMap} from './components/serviceMap/serviceMap';
import {serviceTimeline} from './components/serviceTimeline/serviceTimeline';
import {serviceInstructions} from './components/serviceInstructions/serviceInstructions';
import {serviceProducts} from './components/serviceProducts/serviceProducts';

import {shared} from './shared/shared';

angular.module('app', [

  // Angular dependencies
  uiRouter,
  ngAnimate,
  ngSanitize,
  ngMaterial,
  
  // External dependencies 
  'openlayers-directive',
  
  // App shared dependencies
  shared.name,

  // App navigation dependencies
  sideBar.name,
  topBar.name,

  // App service detail view
  home.name,
  messengerCard.name,
  serviceCard.name,
  serviceMap.name,
  serviceTimeline.name,
  serviceInstructions.name,
  serviceProducts.name
])
.directive('app', appDirective)
.config(function($mdThemingProvider){
  // Configire theme colors
  $mdThemingProvider.theme('mensajeros') 
  .primaryPalette('cyan')
  .accentPalette('yellow')
  .warnPalette('red');
});
