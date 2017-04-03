// we don't need to use a variable
// or the from keyword when importing a css/styl file
// thanks the the styles loader it gets added as a
// <style> tag in the head by default but can be changed
import 'normalize.css';
import 'angular-material/angular-material.min.css';
import {appDirective} from './app.directive';
// the angular libs are just common js
// and therefore we can assume they were
// exported using the default keyword in ES2015
// so we can import each module
// with any name we see fit.
// Note that the actual value are just strings except angular itself
// because that's how angular decided to export
// their auxillary modules
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';
// Layout 
import {sideBar} from './components/sideBar/sideBar';
import {topBar} from './components/topBar/topBar';
// Views
import {home} from './components/home/home';
// Service
import {messengerCard} from './components/messengerCard/messengerCard';

import {shared} from './shared/shared';

angular.module('app', [
  uiRouter,
  ngAnimate,
  ngMaterial,
  // home is the module, the angular module
  // because that's what we exported in home.js
  // all angular modules have a name
  // property who's value is the name you set the
  // module to be
  home.name,
  shared.name,
  // Navigation modules
  sideBar.name,
  topBar.name,

  messengerCard.name
])
.directive('app', appDirective)
.config(function($mdThemingProvider){
  $mdThemingProvider.theme('mensajeros') 
  .primaryPalette('cyan')
  .accentPalette('yellow')
  .warnPalette('red');
});
