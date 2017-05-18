(function () {
    'use strict';

    angular.module('sessionModule', ['ngRoute', 'ngCookies'])

        .config(function ($routeProvider, $locationProvider, $httpProvider) {
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
                                $rootScope.error = method + ' on ' + url + ' failed with status ' + status;
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
            }
        )

        .run(function ($cookies, $rootScope, $state, $window, $log, ServiceSession, ServiceOrder, GRANT_TYPES) {

            /**
             * Determine if an user have a specific role or roles
             * @param role or roles
             * @returns {*}
             */
            $rootScope.hasRole = function (role) {
                var user = $cookies.getObject('user');

                if (angular.isUndefined(user)) {
                    return false;
                }

                if (angular.isArray(role)) {
                    var intersection = _.intersection(role, user.roles);
                    return angular.isDefined(intersection) && intersection.length > 0;
                } else {
                    return _.contains(user.roles, role);
                }
            };

            /**
             * Logout function delete all session cookies and rootScope variables.
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

                $window.location.href = '/iniciar-sesion';
            };

            /**
             * Login function try to begin a session, and if exist a service created when a user is in a no login
             * status, try to create the service and go to the track view.
             * @param username
             * @param password
             */
            $rootScope.login = function (username, password, redirection) {

                return ServiceSession.login(GRANT_TYPES.client, username, password)
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
                                if(angular.isDefined(redirection)){
                                    $state.go(redirection);
                                }
                            });
                    });


            };

            /**
             * Create a session with app credentials.
             * @returns {*}
             */
            $rootScope.loginApp = function () {
                var promise = ServiceSession.login(GRANT_TYPES.application);
                promise.then(function (response) {
                    $cookies.put('access_token', response.data.access_token);
                    $cookies.put('expires_in', response.data.expires_in);
                    $cookies.put('token_type', response.data.token_type);
                });
                return promise;
            };

            /**
             * Refresh token, this function should be used when the session has expired.
             * @returns {*}
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

            $rootScope.initialized = true;
        });

})();
