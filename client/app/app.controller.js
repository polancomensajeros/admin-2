/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import _ from 'lodash';

/**
 * This class handles all the $rootScope functions
 */
class appController {
  constructor($rootScope, $cookies, $state, $mdSidenav, ServiceSession, $mdToast, Cities) {

    /**
    * Logout function. delete all session cookies and rootScope variables.
    */
    $rootScope.logout = function () {
      $cookies.remove('access_token');
      $cookies.remove('expires_in');
      $cookies.remove('refresh_token');
      $cookies.remove('token_type');
      $cookies.remove('selectedCity');
      $cookies.remove('user');

      delete $rootScope.access_token;
      delete $rootScope.expires_in;
      delete $rootScope.refresh_token;
      delete $rootScope.token_type;
      $state.go('loginView');
    };

    /**
     * Toggles the sidenav for mobile
     */
    $rootScope.toggleSideNav = function () {
      $mdSidenav('sidenav-small')
        .toggle()
        .then(function () { });
    };

    /**
     * Shows a simple toast notification
     */
    $rootScope.simpleToast = function(text, position, delay = 2000){
      $mdToast.show(
        $mdToast.simple()
          .textContent(text)
          .position(position)
          .hideDelay(delay)
       );
    };

    /**
     * App for showing or hiding the state loader
     */
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      $rootScope.transitioningToState = true;
    });

     /**
     * Login function, creates cookies, and redirects to the home view
     * @param username
     * @param password
     */
    $rootScope.login = function (username, password, redirection) {
      return ServiceSession.login('password', username, password)
        .then(function (response) {

          $cookies.put('access_token', response.data.access_token);
          $cookies.put('expires_in', response.data.expires_in);
          $cookies.put('refresh_token', response.data.refresh_token);
          $cookies.put('token_type', response.data.token_type);

          $rootScope.access_token = $cookies.get('access_token');
          $rootScope.expires_in = $cookies.get('expires_in');
          $rootScope.refresh_token = $cookies.get('refresh_token');
          $rootScope.token_type = $cookies.get('token_type');

          return ServiceSession.getAuthUser($cookies.get('access_token'))
            .then(function (response) {
              $cookies.putObject('user', response.data);
              $rootScope.user = $cookies.getObject('user');
              if (angular.isDefined(redirection)) {
                $state.go(redirection);
              }
            });
        }, function (res) {
          $mdToast.show(
            $mdToast.simple()
              .textContent('Usuario o contraseña incorrectos')
              .position('bottom right')
              .hideDelay(10000)
          );
        });
    };

    /**
    * Create a session with app credentials.
    * @returns {Object} promise
    */
    $rootScope.loginApp = function () {
      var promise = ServiceSession.login('client_credentials');
      promise.then(function (response) {
        $cookies.put('access_token', response.data.access_token);
        $cookies.put('expires_in', response.data.expires_in);
        $cookies.put('token_type', response.data.token_type);
      });
      return promise;
    };

    /**
     * Refresh token, this function should be used when the session has expired.
     * @returns {Object} promise
     */
    $rootScope.refreshToken = function () {
      var promise = ServiceSession.refreshToken();
      promise.then(function (response) {
        $cookies.put('access_token', response.data.access_token);
        $cookies.put('expires_in', response.data.expires_in);
        $cookies.put('token_type', response.data.token_type);
        $cookies.put('refresh_token', response.data.refresh_token);
      });
      return promise;
    };

    /**
     * If there is not an access token, get one
     */
    if (angular.isUndefined($cookies.get('access_token'))) {
      if (angular.isUndefined($cookies.getObject('user'))) {
        $rootScope.loginApp();
      } else {
        $rootScope.refreshToken();
      }
    }

    /**
     * Get cities from the API
     */
    Cities.get();

  }
}

appController.$inject = ['$rootScope', '$cookies', '$state', '$mdSidenav', 'ServiceSession', '$mdToast', 'Cities'];

export { appController };
