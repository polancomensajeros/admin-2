
/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

const serviceSession = ($http, $location, $cookies) => {

    /**
     * Oauth Login
     * @param  {string} grantType 
     * @param  {string} username username
     * @param  {string} password user passord 
     * @returns {Object} A $promise object
     */
    const login = function (grantType, username, password) {
        const req = {
            method: 'POST',
            url: '/session/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                grantType: grantType,
                username: username,
                password: password
            }
        };

        return $http(req);
    }

    /**
     * Refresh token function
     * @returns {Object} A $promise object
     */
    const refreshToken = function () {
        const req = {
            method: 'POST',
            url: '/session/refreshToken',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
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
            url: '/session/getUser',
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
        const data = angular.toJson({
            email: email,
            url: $location.host() + '/recuperar-contrasena'
        });

        const req = {
            method: 'POST',
            url: 'session/recoveryPassword',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                jsonData: data
            }
        };

        return $http(req);
    }

    /**
     * Changes the user password
     * @param {string} password new passeord
     * @param {string} nonce 
     */
    const changePassword = function (password, nonce) {
        const data = angular.toJson({
            password: password,
            nonce: nonce
        });

        const req = {
            method: 'POST',
            url: '/session/changePassword',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                jsonData: data
            }
        };

        return $http(req);
    }

    return { login, refreshToken, getAuthUser, recoveryPassword, changePassword };
}

serviceSession.$inject = ['$http', '$location', '$cookies'];

export { serviceSession };