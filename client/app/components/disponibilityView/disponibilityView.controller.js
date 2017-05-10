/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import createDispModal from './components/createDispModal/createDispModal.html';
import { createDispModalController as createDispModalController } from './components/createDispModal/createDispModal.controller';

import createSpotModal from './components/createSpotModal/createSpotModal.html';
import { createSpotModalController as createSpotModalController } from './components/createSpotModal/createSpotModal.controller';

// Class representing a DisponibilityView

class DisponibilityViewController {
  constructor($mdDialog, Titles) {
    Titles.setTopbarTitle('Disponibilidades');
    this.mdDialog = $mdDialog;
    this.currentTab = 'actives';
  }

  setCurrentTab(tabName) {
    this.currentTab = tabName;
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

  create(){
    switch(this.currentTab){
      case 'actives':
        this.openCreateDisponibilityModal();
      break;
      case 'alerts':
        console.log('todo');
      break;
      case 'prices':
        console.log('todo');
      break;
      case 'spots':
        this.openCreateSpotModal();
      break;
    }
  }

}

DisponibilityViewController.$inject = ['$mdDialog', 'Titles'];

export { DisponibilityViewController };
