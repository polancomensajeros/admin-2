/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import createDispModal from './components/createDispModal/createDispModal.html';
import { createDispModalController as createDispModalController } from './components/createDispModal/createDispModal.controller';

import createSpotModal from './components/createSpotModal/createSpotModal.html';
import { createSpotModalController as createSpotModalController } from './components/createSpotModal/createSpotModal.controller';

import createZoneModal from './components/createZoneModal/createZoneModal.html';
import { createZoneModalController as createZoneModalController } from './components/createZoneModal/createZoneModal.controller';

// Class representing a DisponibilityView

class DisponibilityViewController {
  constructor($mdDialog, Titles, $rootScope) {
    Titles.setTopbarTitle('Disponibilidades'); 
    this.mdDialog = $mdDialog;
    this.currentTab = {i : 1, labelBtn : 'Disponibilidad'};
  }

  setCurrentTab(tab) {
    this.currentTab = tab;
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

  create(){
    switch(parseInt(this.currentTab.i)){
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

DisponibilityViewController.$inject = ['$mdDialog', 'Titles', '$rootScope'];

export { DisponibilityViewController };
