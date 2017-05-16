/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {Page} from '../../PageClass';
class LoginViewController extends Page{
  constructor($http, $rootScope, $cookies, $state, ServiceSession) {
    super(false, $cookies, $state);
    $rootScope.logout();
    if (angular.isDefined($cookies.getObject('user'))) {
      $state.go('serviceDetailView');
    }
    this.http = $http;
    this.rootScope = $rootScope;
    this.ServiceSession = ServiceSession;
    this.forgot = false;
    this.loginInProcess = false;
    this.instructionsSent = false;
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

  passwordRecovery(){
    const self = this;
    this.loginInProcess = true;
    this.ServiceSession.recoveryPassword(this.email).then(function(){
      self.instructionsSent = true;
      self.loginInProcess = false;
    }, function(res){
      self.rootScope.simpleToast('Ocurrio un error, intentelo mas tarde', 'bottom right');
      self.instructionsSent = false;
      self.loginInProcess = false;
    });
  }

}
LoginViewController.$inject = ['$http', '$rootScope', '$cookies', '$state', 'ServiceSession'];

export { LoginViewController };
