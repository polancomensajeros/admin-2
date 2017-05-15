/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

// Class representing a LoginView

class LoginViewController {
  constructor($http) {
    this.http = $http;
    this.forgot = false;
    this.greeting = 'LoginViewController!';
  }

  testProxy(){
    this.http.get('/remoteapi/pruebas').then(function(res){
      console.log(res.data);
    }, function(res){
      console.log(res.data);
    });
  }

}

LoginViewController.$inject = ['$http'];

export {LoginViewController};
