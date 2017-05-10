/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {disponibilityZones} from './disponibilityZones'
import {DisponibilityZonesController} from './disponibilityZones.controller';
import {disponibilityZonesDirective} from './disponibilityZones.directive';
import template from './disponibilityZones.html';

describe('DisponibilityZones', ()=>{
  let $rootScope,
  makeController;

  beforeEach(window.module(disponibilityZones.name));
  beforeEach(inject((_$rootScope_)=>{
    $rootScope = _$rootScope_;
    makeController = ()=>{
      return new DisponibilityZonesController();
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
      let directive = disponibilityZonesDirective();

      it('should use the right template',()=>{
        expect(directive.template).to.equal(template);
      });

      it('should use controllerAs', ()=>{
        expect(directive).to.have.property('controllerAs');
      });

      it('should use the right controller', ()=>{
        expect(directive.controller).to.equal(DisponibilityZonesController);
      });
  });
});
