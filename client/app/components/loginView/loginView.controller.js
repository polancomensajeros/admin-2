/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {Page} from '../../PageClass';
class LoginViewController extends Page{
  constructor(ServiceSession, $rootScope) {
    super(false);
    this.serviceSession = ServiceSession;
    this.rootScope = $rootScope;
    this.forgot = false;
    this.loginInProcess = false;
    this.instructionsSent = false;
    this.logout();
    $rootScope.loginApp();
  }

  logout(){
    this.serviceSession.logout();
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
    this.serviceSession.recoveryPassword(this.email).then(function(){
      self.instructionsSent = true;
      self.loginInProcess = false;
    }, function(res){
      self.rootScope.simpleToast(res.data.message, 'bottom right');
      self.instructionsSent = false;
      self.loginInProcess = false;
    });
  }

}
LoginViewController.$inject = ['ServiceSession', '$rootScope'];

export { LoginViewController };
