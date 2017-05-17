/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

class Page {
  constructor(loginRequired, $cookies, $state, ServiceSession) {
    this.loginRequired = loginRequired;
    this.serviceSession = ServiceSession;

    if(this.loginRequired){
        if (angular.isUndefined($cookies.getObject('user'))) {
            $state.go('loginView');
        }
    }
  }

  logout(){
    this.serviceSession.logout();
  }

}

Page.$inject = ['$cookies', '$state', 'ServiceSession'];

export {Page};
