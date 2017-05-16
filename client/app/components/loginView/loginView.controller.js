/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

// Class representing a LoginView

class LoginViewController {
  constructor($http, $rootScope) {
    this.http = $http;
    this.rootScope = $rootScope;
    this.forgot = false;
    this.loginInProcess = false;
  }

  login() {
    const self = this;
    this.loginInProcess = true;
    this.rootScope.login(self.email, self.password, 'serviceDetailView')
      .then(function () {
        self.loginInProcess = false;
      }, function () {
        self.loginInProcess = false;
      });
  }

}

LoginViewController.$inject = ['$http', '$rootScope'];

export { LoginViewController };
