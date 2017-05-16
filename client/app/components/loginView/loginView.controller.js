/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {Page} from '../../PageClass';
class LoginViewController extends Page{
  constructor($http, $rootScope, $cookies, $state) {
    super(false, $cookies, $state);
    if (angular.isDefined($cookies.getObject('user'))) {
      $state.go('serviceDetailView');
    }
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
LoginViewController.$inject = ['$http', '$rootScope', '$cookies', '$state'];

export { LoginViewController };
