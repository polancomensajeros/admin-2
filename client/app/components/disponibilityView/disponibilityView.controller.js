/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import createDispModal from './components/createDispModal/createDispModal.html';
import { createDispModalController as createDispModalController } from './components/createDispModal/createDispModal.controller';

import createSpotModal from './components/createSpotModal/createSpotModal.html';
import { createSpotModalController as createSpotModalController } from './components/createSpotModal/createSpotModal.controller';

import createZoneModal from './components/createZoneModal/createZoneModal.html';
import { createZoneModalController as createZoneModalController } from './components/createZoneModal/createZoneModal.controller';

import { Page } from '../../classes/PageClass';
// Class representing a DisponibilityView

class DisponibilityViewController extends Page {
  constructor($mdDialog, Titles, $rootScope, $cookies, $state, $scope, Zones, Prices, Spots) {
    super(true, $cookies, $state);
    Titles.setTopbarTitle('Disponibilidades');
    this.mdDialog = $mdDialog;
    this.currentTab = { i: 1, labelBtn: 'Disponibilidad' };
    this.Zones = Zones;
    this.Prices = Prices;
    this.Spots = Spots;
    const self = this;
    this.scope = $scope;
    /**
     * After creating a zone broadcast the getZones functions
     */
    $scope.$on('zoneCreated', function () {
      $scope.$broadcast('getZones', 1);
    });

    /**
     * After creating a spot broadcast the getSpots functions
     */
    $scope.$on('spotCreated', function () {
      $scope.$broadcast('getSpots', 1);
    });

    /**
     * Create the filters for the table
     */
    $scope.$on('createFilters', function (event, args) {
      //self.filters = args.filters;
    });
  }

  setCurrentTab(tab) {
    this.currentTab = tab;
    const self = this;
    switch (parseInt(self.currentTab.i)) {
      case 1:
        console.log('todo');
        break;
      case 2:
        console.log('todo');
        break;
      case 3:
        self.filters = self.Prices.getFilters()
        break;
      case 4:
        self.filters = self.Spots.getFilters()
        break;
      case 5:
        self.filters = self.Zones.getFilters()
        break;
    }
  }

  filterTable() {
    const self = this;
    switch (parseInt(this.currentTab.i)) {
      case 1:
        console.log('todo');
        break;
      case 2:
        console.log('todo');
        break;
      case 3:
        self.scope.$broadcast('filterPrices', {
          filterName: self.filterName,
          filter: self.filter
        });
        break;
      case 4:
        self.scope.$broadcast('filterSpots', {
          filterName: self.filterName,
          filter: self.filter
        });
        break;
      case 5:
        self.scope.$broadcast('filterZones', {
          filterName: self.filterName,
          filter: self.filter
        });
        break;
    }
  }

  testingModals(ev, template, controller) {
    const self = this;
    this.mdDialog.show({
      controller: controller,
      controllerAs: 'vm',
      template: template,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: true
    })
      .then(function (answer) {
        console.log(answer);
      }, function () {
        console.log('Dialog closed');
      });
  }

  openCreateDisponibilityModal(ev) {
    this.testingModals(ev, createDispModal, createDispModalController);
  }

  openCreateSpotModal(ev) {
    this.testingModals(ev, createSpotModal, createSpotModalController);
  }

  openCreateZoneModal(ev) {
    this.testingModals(ev, createZoneModal, createZoneModalController);
  }

  create() {
    switch (parseInt(this.currentTab.i)) {
      case 1:
        this.openCreateDisponibilityModal();
        break;
      case 2:
        console.log('todo');
        break;
      case 3:
        console.log('todo');
        break;
      case 4:
        this.openCreateSpotModal();
        break;
      case 5:
        this.openCreateZoneModal();
        break;
    }
  }

}

DisponibilityViewController.$inject = ['$mdDialog', 'Titles', '$rootScope', '$cookies', '$state', '$scope', 'Zones', 'Prices', 'Spots'];

export { DisponibilityViewController };
