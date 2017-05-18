
/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

const ServiceSession = ($http, $location, $cookies, $rootScope, $state) => {

    /**
     * Oauth Login
     * @param  {string} grantType 
     * @param  {string} username username
     * @param  {string} password user passord 
     * @returns {Object} A $promise object
     */
    const login = function (grantType, username, password) {
        
        let stringData = 'grant_type=' + grantType;

        let data = {
            grant_type: grantType
        }

        if(grantType === 'password'){
            stringData += '&username=' + username;
            stringData += '&password=' + password;
        }

        const req = {
            method: 'POST',
            url: '/oauth/token',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: stringData
        };

        return $http(req);
    }

    const logout = function(){
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
    }

    /**
     * Refresh token function
     * @returns {Object} A $promise object
     */
    const refreshToken = function () {
        const req = {
            method: 'POST',
            url: '/refresh-token',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                grant_type: 'refresh_token',
                refreshToken: $cookies.get('refresh_token')
            }
        };

        return $http(req);
    }

    /**
     * Obtains the info of the authenticated user
     * @param {string} accessToken access_token of the current user 
     */
    const getAuthUser = function (accessToken) {
        const req = {
            url: '/oauth/resources',
            method: 'GET',
            params: { access_token: accessToken }
        };

        return $http(req);
    }

    /**
     * send the recovery password email
     * @param {string} email user email 
     */
    const recoveryPassword = function (email) {
        const data = {
            email: email,
            url: $location.host() + '/password-reset'
        };

        const req = {
            method: 'POST',
            url: '/recoverpassword',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        return $http(req);
    }

    /**
     * Changes the user password
     * @param {string} password new password
     * @param {string} nonce 
     */
    const changePassword = function (password, nonce) {
        const data = angular.toJson({
            password: password,
            nonce: nonce
        });

        const req = {
            method: 'POST',
            url: '/changePassword',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        return $http(req);
    }

    return { login, logout, refreshToken, getAuthUser, recoveryPassword, changePassword };
}

ServiceSession.$inject = ['$http', '$location', '$cookies', '$rootScope', '$state'];

export { ServiceSession };