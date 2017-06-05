'use strict';

var variables = require('../helpers/variables.js');

module.exports = {
    stateUrl: 'disponibilidades',

    toast: element(by.css('md-toast span')),

    zonesTab: {
        selectTab: function(){
            element(by.css('md-pagination-wrapper md-tab-item:nth-child(5)')).click();
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

    spotsTab: {
        selectTab: function(){
            element(by.css('md-pagination-wrapper md-tab-item:nth-child(4)')).click();
        },
        spots: element.all(by.repeater('spot in vm.tableData')),
        createSpotBtn: element(by.css('[ng-click="vmd.create()"]')),
        createSpotModal:{
            dialog: element(by.id('create-spot-modal')),
            city: element(by.model('vm.city')),
            name: element(by.model('vm.name')),
            address: element(by.model('vm.address')),
            company: element(by.css('#create-spot-modal [ng-model="$mdAutocompleteCtrl.scope.searchText"]')),
            companySuggestions: element.all(by.css('.md-autocomplete-suggestions li')),
            phone: element(by.model('vm.phone')),
            clientID: element(by.model('vm.clientId')),
            schedule: element(by.model('vm.schedule')),
            parking: element(by.model('vm.parking')),
            createBtn: element(by.css('[ng-click="vm.createSpot()"]')),
            cancelBtn: element(by.css('[ng-click="vm.cancel()"]')),
        } ,
        createSuccessText: 'Punto creado'
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
