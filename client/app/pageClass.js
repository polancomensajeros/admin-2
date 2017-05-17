/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

class Page {
  constructor(loginRequired, $cookies, $state) {
    this.loginRequired = loginRequired;

    if(this.loginRequired){
        if (angular.isUndefined($cookies.getObject('user'))) {
            $state.go('loginView');
        }
    }
  }

}

Page.$inject = ['$cookies', '$state'];

export {Page};
