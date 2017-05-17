/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {Page} from '../../PageClass';
class LoginViewController extends Page{
  constructor(ServiceSession, $rootScope) {
    super(false);
    super.logout();
    
    this.ServiceSession = ServiceSession;
    this.rootScope = $rootScope;
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
      //self.rootScope.simpleToast('Ocurrio un error, intentelo mas tarde', 'bottom right');
      self.instructionsSent = false;
      self.loginInProcess = false;
    });
  }

}
LoginViewController.$inject = ['ServiceSession', '$rootScope'];

export { LoginViewController };
