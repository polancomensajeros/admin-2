/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */
var moment = require('moment');
moment().format();

import 'normalize.css';
import 'angular-material/angular-material.min.css';
import 'ng-date-range-picker/src/picker.css';
import 'angular-material-data-table/dist/md-data-table.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'lf-ng-md-file-input/dist/lf-ng-md-file-input.min.css';
import 'angular-state-loader/angular-state-loader.css';
import 'offline-js/themes/offline-theme-dark.css';
import 'offline-js/themes/offline-language-spanish.css';

import { appDirective } from './app.directive';

// Angular dependencies
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import ngCookies from 'angular-cookies';

// External dependencies
import openLayersDirective from 'angular-openlayers-directive';
import ngMaterialDataTable from 'angular-material-data-table';
import lfNgMdFileInput from 'lf-ng-md-file-input';
import ngStateLoader from 'angular-state-loader';
import offlineJs from 'offline-js';

// Layout 
import { sideBar } from './components/sideBar/sideBar';
import { topBar } from './components/topBar/topBar';

// Views
import { loginView } from './components/loginView/loginView';
import { serviceDetailView } from './components/serviceDetailView/serviceDetailView';
import { messengerDetailView } from './components/messengerDetailView/messengerDetailView';
import { alertsView } from './components/alertsView/alertsView';
import { editMessengerView } from './components/editMessengerView/editMessengerView';
import { disponibilityView } from './components/disponibilityView/disponibilityView';
import { passwordResetView } from './components/passwordResetView/passwordResetView';
import { dashboardView } from './components/dashboardView/dashboardView';

// ServiceDetailView components
import { messengerCard } from './components/messengerCard/messengerCard';
import { serviceCard } from './components/serviceCard/serviceCard';
import { serviceMap } from './components/serviceMap/serviceMap';
import { serviceTimeline } from './components/serviceTimeline/serviceTimeline';
import { serviceInstructions } from './components/serviceInstructions/serviceInstructions';
import { serviceProducts } from './components/serviceProducts/serviceProducts';
import { companyCard } from './components/companyCard/companyCard';
import { serviceActions } from './components/serviceActions/serviceActions';

// messengerDetailView components
import { messengerDocuments } from './components/messengerDocuments/messengerDocuments';
import { messengerConfig } from './components/messengerConfig/messengerConfig';
import { messengerBudget } from './components/messengerBudget/messengerBudget';
import { messengerMovements } from './components/messengerMovements/messengerMovements';
import { messengerServices } from './components/messengerServices/messengerServices';

// AlertsView component
import { alertsStatus } from './components/alertsStatus/alertsStatus';
import { alertsMap } from './components/alertsMap/alertsMap';
import { alerts } from './components/alerts/alerts';

// EditMessengerView components
import { editMessengerMenu } from './components/editMessengerMenu/editMessengerMenu';
import { editMessengerForms } from './components/editMessengerForms/editMessengerForms';

// disponibilityView components
import { disponibilityActive } from './components/disponibilityActive/disponibilityActive';
import { disponibilityPrices } from './components/disponibilityPrices/disponibilityPrices';
import { disponibilitySpots } from './components/disponibilitySpots/disponibilitySpots';
import { disponibilityZones } from './components/disponibilityZones/disponibilityZones';

// Shared factories and constants
import { shared } from './shared/shared';

angular.module('app', [

  // Angular dependencies
  uiRouter,
  ngAnimate,
  ngSanitize,
  ngMaterial,
  ngMessages,
  ngCookies,

  // External dependencies 
  'openlayers-directive',
  ngMaterialDataTable,
  'lfNgMdFileInput',
  'ec.stateloader',

  // shared dependencies
  shared.name,

  // navigation dependencies
  sideBar.name,
  topBar.name,

  // Login view

  loginView.name,

  // Dashboard view

  dashboardView.name,

  // Password reset view

  passwordResetView.name,

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
  messengerMovements.name,
  messengerServices.name,

  // Alerts view
  alertsView.name,

  alertsStatus.name,
  alertsMap.name,
  alerts.name,

  // Edit messenger view
  editMessengerView.name,

  editMessengerMenu.name,
  editMessengerForms.name,

  // Disponibilities view
  disponibilityView.name,

  disponibilityActive.name,
  disponibilityPrices.name,
  disponibilitySpots.name,
  disponibilityZones.name
])
.directive('app', appDirective)
.config(function ($mdThemingProvider, $locationProvider, $httpProvider) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    
    // Configure theme colors
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .warnPalette('deep-orange')
      .accentPalette('grey');

    var AuthAppConfig = {
    useAuthTokenHeader: true
    };

    /**
      * http interceptor to scan requests and responses.
      */
    $httpProvider.interceptors.push(function ($q, $rootScope, $cookies, $injector) {
      return {
        /**
         * Http interceptor to scan error responses.
         * @param rejection
         * @returns {*}
         */
        responseError: function (rejection) {
          var status = rejection.status;
          var method = rejection.method;
          var url = rejection.url;
          if (status === 401 && angular.isDefined(rejection.data.message) && rejection.data.message === 'The access token provided has expired') {
            var $http = $injector.get('$http');
            var deferred = $q.defer();

            if (angular.isDefined($cookies.getObject('user'))) {
              $rootScope.refreshToken().then(deferred.resolve, deferred.reject);
              return deferred.promise.then(function () {
                return $http(rejection.config);
              });
            } else {
              $rootScope.loginApp().then(deferred.resolve, deferred.reject);
              return deferred.promise.then(function () {
                return $http(rejection.config);
              });
            }
          } else {
            if(status === 400 && angular.isDefined(rejection.data.message) && rejection.data.message === 'access_token is required'){
              var deferred = $q.defer();
              $rootScope.loginApp().then(deferred.resolve, deferred.reject);
              return deferred.promise.then(function () {
                return $http(rejection.config);
              });
            }else{
              $rootScope.error = method + ' on ' + url + ' failed with status ' + status;
            }
          }
          return $q.reject(rejection);
        },

        /**
         * http interceptor to scan each request.
         * @param config
         * @returns {*}
         */
        request: function (config) {
          if (angular.isDefined($cookies.get('access_token'))) {
            var authToken = $cookies.get('access_token');
            if (AuthAppConfig.useAuthTokenHeader) {
              config.headers['X-Auth-Token'] = authToken;
            } else {
              config.url = config.url + '?token=' + authToken;
            }
          }
          return config || $q.when(config);
        }
      };
    });

});
