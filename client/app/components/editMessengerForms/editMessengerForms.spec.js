/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {editMessengerForms} from './editMessengerForms'
import {EditMessengerFormsController} from './editMessengerForms.controller';
import {editMessengerFormsDirective} from './editMessengerForms.directive';
import template from './editMessengerForms.html';

describe('EditMessengerForms', ()=>{
  let $rootScope,
  makeController;

  beforeEach(window.module(editMessengerForms.name));
  beforeEach(inject((_$rootScope_)=>{
    $rootScope = _$rootScope_;
    makeController = ()=>{
      return new EditMessengerFormsController();
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
      let directive = editMessengerFormsDirective();

      it('should use the right template',()=>{
        expect(directive.template).to.equal(template);
      });

      it('should use controllerAs', ()=>{
        expect(directive).to.have.property('controllerAs');
      });

      it('should use the right controller', ()=>{
        expect(directive.controller).to.equal(EditMessengerFormsController);
      });
  });
});
