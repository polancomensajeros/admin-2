'use strict';

var variables = require('../helpers/variables.js');

module.exports = {
    stateUrl: 'disponibilidades',

    toast: element(by.css('md-toast span')),

    zonesTab: {
        selectTab: function(){
            element(by.css('[md-tab-id="6"]')).click();
        },
        zones: element.all(by.repeater('zone in vm.tableData')),
        createZoneBtn: element(by.css('[ng-click="vmd.create()"]')),
        createZoneModal: element(by.id('create-zone-modal')),
        mapCanvas: element(by.tagName('canvas')),
        createName: element(by.model('vm.name')),
        createBtn: element(by.css('[ng-click="vm.createZone(vm.city, vm.name, vm.zonePolygon)"]')),
        cancelBtn: element(by.css('[ng-click="vm.cancel()"]')),
        createSuccessText: 'Zona guardada'
    },
    
    /**
     * Go to login page
     */
    go: function() {
        browser.driver.get( variables.ADMIN_PATH + this.stateUrl);
        browser.ignoreSynchronization = true;
        browser.waitForAngular();
        browser.sleep(2000);
    }

};
