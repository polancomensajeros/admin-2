import {<%= name %>Directive} from './<%= name %>.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';


export const <%= name %> = angular.module('<%= name %>', [uiRouter])
  // Every component is created as an independent view, if you dont need it to
  // be a view remove the state below
  .config(($stateProvider) => {
    $stateProvider.state('<%= name %>', {
      url: '/<%= name %>',
      template: '<<%- name %>></<%- name %>>'
    })
  })
  .directive('<%= name %>', <%= name %>Directive);
