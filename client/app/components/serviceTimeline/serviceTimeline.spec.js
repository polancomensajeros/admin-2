import {serviceTimeline} from './serviceTimeline'
import {ServiceTimelineController} from './serviceTimeline.controller';
import {serviceTimelineDirective} from './serviceTimeline.directive';
import template from './serviceTimeline.html';

describe('ServiceTimeline', ()=>{
  let $rootScope,
  makeController;

  beforeEach(window.module(serviceTimeline.name));
  beforeEach(inject((_$rootScope_)=>{
    $rootScope = _$rootScope_;
    makeController = ()=>{
      return new ServiceTimelineController();
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
      let directive = serviceTimelineDirective();

      it('should use the right template',()=>{
        expect(directive.template).to.equal(template);
      });

      it('should use controllerAs', ()=>{
        expect(directive).to.have.property('controllerAs');
      });

      it('should use the right controller', ()=>{
        expect(directive.controller).to.equal(ServiceTimelineController);
      });
  });
});
