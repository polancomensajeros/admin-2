/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {disponibilityActive} from './disponibilityActive'
import {DisponibilityActiveController} from './disponibilityActive.controller';
import {disponibilityActiveDirective} from './disponibilityActive.directive';
import template from './disponibilityActive.html';

describe('DisponibilityActive', ()=>{
  let $rootScope,
  makeController;

  beforeEach(window.module(disponibilityActive.name));
  beforeEach(inject((_$rootScope_)=>{
    $rootScope = _$rootScope_;
    makeController = ()=>{
      return new DisponibilityActiveController();
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
  });


  describe('Directive', ()=>{
      // test the component/directive itself
      let directive = disponibilityActiveDirective();

      it('should use the right template',()=>{
        expect(directive.template).to.equal(template);
      });

      it('should use controllerAs', ()=>{
        expect(directive).to.have.property('controllerAs');
      });

      it('should use the right controller', ()=>{
        expect(directive.controller).to.equal(DisponibilityActiveController);
      });
  });
});
