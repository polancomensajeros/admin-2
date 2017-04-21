/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {alerts} from './alerts'
import {AlertsController} from './alerts.controller';
import {alertsDirective} from './alerts.directive';
import template from './alerts.html';

describe('Alerts', ()=>{
  let $rootScope,
  makeController;

  beforeEach(window.module(alerts.name));
  beforeEach(inject((_$rootScope_)=>{
    $rootScope = _$rootScope_;
    makeController = ()=>{
      return new AlertsController();
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
      let directive = alertsDirective();

      it('should use the right template',()=>{
        expect(directive.template).to.equal(template);
      });

      it('should use controllerAs', ()=>{
        expect(directive).to.have.property('controllerAs');
      });

      it('should use the right controller', ()=>{
        expect(directive.controller).to.equal(AlertsController);
      });
  });
});
