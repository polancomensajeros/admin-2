/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import { Page } from '../../PageClass';

class PasswordResetViewController extends Page {
  constructor(ServiceSession, $rootScope, $location, $state) {
    super(false);
    this.serviceSession = ServiceSession;
    this.rootScope = $rootScope;
    this.location = $location;
    this.state = $state;
    this.recoveryInProgress = false;
    this.nonce = undefined;
    $rootScope.loginApp();
    this.validateNonce();
  }

  validateNonce() {
    let url = this.location.absUrl();
    let index = url.indexOf('nonce');
    if (index > 0) {
      this.nonce = url.substring(index + 6, url.length);
      if (angular.isUndefined(this.nonce) || this.nonce === '') {
        this.state.go('loginView');
      }
    } else {
      this.state.go('loginView');
    }
  }

  logout() {
    this.serviceSession.logout();
  }

  updatePassword() {
    this.serviceSession.changePassword().then(function (res) {

    }, function () {

    });
  }

}

PasswordResetViewController.$inject = ['ServiceSession', '$rootScope', '$location', '$state'];

export { PasswordResetViewController };
