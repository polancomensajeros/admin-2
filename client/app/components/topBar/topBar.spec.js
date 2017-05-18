/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {topBar} from './topBar'
import {TopBarController} from './topBar.controller';
import {topBarDirective} from './topBar.directive';
import template from './topBar.html';

describe('TopBar', ()=>{
  let $rootScope,
  makeController;

  beforeEach(window.module(topBar.name));
  beforeEach(inject((_$rootScope_)=>{
    $rootScope = _$rootScope_;
    makeController = ()=>{
      return new TopBarController();
    };
  }));

  describe('Module', ()=>{
    // test things about the component module
    // checking to see if it registers certain things and what not
    // test for best practices with naming too
    // test for routing
  });

  describe('Controller', ()=>{
    // test your controller here
  });

  describe('Template', ()=>{
    // test the template
    // use Regexes to test that you are using the right bindings {{  }}

    it('should have title in template', ()=>{
      expect(template).to.match(/{{\s?vm\.title\s?}}/g);
    });
  });


  describe('Directive', ()=>{
      // test the component/directive itself
      let directive = topBarDirective();

      it('should use the right template',()=>{
        expect(directive.template).to.equal(template);
      });

      it('should use controllerAs', ()=>{
        expect(directive).to.have.property('controllerAs');
      });

      it('should use the right controller', ()=>{
        expect(directive.controller).to.equal(TopBarController);
      });
  });
});
