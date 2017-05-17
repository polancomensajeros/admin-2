/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {app} from '../../app';
import {loginView} from './loginView'
import {LoginViewController} from './loginView.controller';
import {loginViewDirective} from './loginView.directive';
import template from './loginView.html';

describe('LoginView', ()=>{
  let $rootScope,
  makeController;

  beforeEach(window.module(loginView.name));
  beforeEach(inject((_$rootScope_)=>{
    $rootScope = _$rootScope_;
    makeController = (injectables)=>{
      return new LoginViewController(injectables);
    };
  }));

  describe('Module', ()=>{
    // test things about the component module
    // checking to see if it registers certain things and what not
    // test for best practices with naming too
    // test for routing
  });

  describe('Controller', ()=>{
    it('should login an user correctly', ()=>{
      const controller = makeController();
      console.log(controller);
      /*const controller = makeController();
      controller.email = 's.polanco@mensajerosurbanos.com';
      controller.password = '1qazxsw2';
      controller.login().then(function(){
        console.log('S');
        console.log('U');
        console.log('C');
        console.log('C');
        console.log('E');
        console.log('S');
        console.log('S');
      });*/

      //expect(controller.posts).to.be.an('array');
      //expect(controller.posts[0]).to.have.property('author');
      //expect(controller.posts[0]).to.have.property('title');
    });
  });

  describe('Template', ()=>{
    // test the template
    // use Regexes to test that you are using the right bindings {{  }}
  });


  describe('Directive', ()=>{
      // test the component/directive itself
      let directive = loginViewDirective();

      it('should use the right template',()=>{
        expect(directive.template).to.equal(template);
      });

      it('should use controllerAs', ()=>{
        expect(directive).to.have.property('controllerAs');
      });

      it('should use the right controller', ()=>{
        expect(directive.controller).to.equal(LoginViewController);
      });
  });
});
