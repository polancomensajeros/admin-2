import {serviceActions} from './serviceActions'
import {ServiceActionsController} from './serviceActions.controller';
import {serviceActionsDirective} from './serviceActions.directive';
import template from './serviceActions.html';

describe('ServiceActions', ()=>{
  let $rootScope,
  makeController;

  beforeEach(window.module(serviceActions.name));
  beforeEach(inject((_$rootScope_)=>{
    $rootScope = _$rootScope_;
    makeController = ()=>{
      return new ServiceActionsController();
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
      let directive = serviceActionsDirective();

      it('should use the right template',()=>{
        expect(directive.template).to.equal(template);
      });

      it('should use controllerAs', ()=>{
        expect(directive).to.have.property('controllerAs');
      });

      it('should use the right controller', ()=>{
        expect(directive.controller).to.equal(ServiceActionsController);
      });
  });
});
