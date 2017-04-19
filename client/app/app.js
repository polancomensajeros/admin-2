/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import 'normalize.css';
import 'angular-material/angular-material.min.css';
import 'ng-date-range-picker/src/picker.css';
import 'angular-material-data-table/dist/md-data-table.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import {appDirective} from './app.directive';

// Angular dependencies
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import ngMaterial from 'angular-material';

// External dependencies
import openLayersDirective from 'angular-openlayers-directive';
import ngMaterialDataTable from 'angular-material-data-table';

// Layout 
import {sideBar} from './components/sideBar/sideBar';
import {topBar} from './components/topBar/topBar';

// Views
import {serviceDetailView} from './components/serviceDetailView/serviceDetailView';
import {messengerDetailView} from './components/messengerDetailView/messengerDetailView';

// ServiceDetailView components
import {messengerCard} from './components/messengerCard/messengerCard';
import {serviceCard} from './components/serviceCard/serviceCard';
import {serviceMap} from './components/serviceMap/serviceMap';
import {serviceTimeline} from './components/serviceTimeline/serviceTimeline';
import {serviceInstructions} from './components/serviceInstructions/serviceInstructions';
import {serviceProducts} from './components/serviceProducts/serviceProducts';
import {companyCard} from './components/companyCard/companyCard';
import {serviceActions} from './components/serviceActions/serviceActions';

// messengerDetailView components
import {messengerDocuments} from './components/messengerDocuments/messengerDocuments';
import {messengerConfig} from './components/messengerConfig/messengerConfig';
import {messengerBudget} from './components/messengerBudget/messengerBudget';
import {messengerMovements} from './components/messengerMovements/messengerMovements';

// Shared factories and constants
import {shared} from './shared/shared';

angular.module('app', [

  // Angular dependencies
  uiRouter,
  ngAnimate,
  ngSanitize,
  ngMaterial,
  
  // External dependencies 
  'openlayers-directive',
  ngMaterialDataTable,
  //'angular-material-data-table',

  // shared dependencies
  shared.name,

  // navigation dependencies
  sideBar.name,
  topBar.name,

  // service detail view
  serviceDetailView.name,

  messengerCard.name,
  serviceCard.name,
  serviceMap.name,
  serviceTimeline.name,
  serviceInstructions.name,
  serviceProducts.name,
  companyCard.name,
  serviceActions.name,

  // Messenger detail view
  messengerDetailView.name,

  messengerDocuments.name,
  messengerConfig.name,
  messengerBudget.name,
  messengerMovements.name
])
.directive('app', appDirective)
.config(function($mdThemingProvider){
  // Configire theme colors
  $mdThemingProvider.theme('mensajeros') 
  .primaryPalette('blue-grey')
  .warnPalette('deep-orange')
  .accentPalette('grey');
});
