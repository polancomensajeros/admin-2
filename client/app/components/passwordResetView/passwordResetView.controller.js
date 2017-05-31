/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import { Page } from '../../classes/PageClass';

class PasswordResetViewController extends Page {
  constructor(ServiceSession, $rootScope, $location, $state) {
    super(false);
    this.serviceSession = ServiceSession;
    this.rootScope = $rootScope;
    this.location = $location;
    this.state = $state;
    this.recoveryInProgress = false;
    this.nonce = undefined;
    this.success = false;
    $rootScope.loginApp();
    this.validateNonce();
  }

  validateNonce() {
    const nonce = this.location.search().nonce;
    if(angular.isUndefined(nonce)){
      this.state.go('loginView');
    }else{
      this.nonce = nonce;
    }
  }

  logout() {
    this.serviceSession.logout();
  }

  updatePassword() {
    this.recoveryInProgress = true;
    const self = this;
    this.serviceSession.changePassword(this.newPassword, this.nonce).then(function (res) {
      self.success = true;
      self.recoveryInProgress = false;
    }, function (res) {
       self.rootScope.simpleToast(res.data.message, 'bottom right');
       self.recoveryInProgress = false;
    });
  }

}

PasswordResetViewController.$inject = ['ServiceSession', '$rootScope', '$location', '$state'];

export { PasswordResetViewController };
