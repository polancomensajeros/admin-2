/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

// Import modal child components
import adjustmentModal from './components/adjustmentModal/adjustmentModal.html';
import { adjustmentModalController as adjustmentModalController } from './components/adjustmentModal/adjustmentModal.controller';

import blockModal from './components/blockModal/blockModal.html';
import { blockModalController as blockModalController } from './components/blockModal/blockModal.controller';

import configModal from './components/configModal/configModal.html';
import { configModalController as configModalController } from './components/configModal/configModal.controller';

class MessengerCardController {

  constructor($mdDialog) {
    this.mdDialog = $mdDialog;
  }

  showAdjustmentModal(ev){
    this.testingModals(ev, adjustmentModal, adjustmentModalController);
  }

  showBlockModal(ev){
    this.testingModals(ev, blockModal, blockModalController);
  }

  showConfigModal(ev){
    this.testingModals(ev, configModal, configModalController);
  }

  testingModals(ev, template, controller) {
    const self = this;
    this.mdDialog.show({
      controller: controller,
      controllerAs: 'vm',
      template: template,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    })
    .then(function (answer) {
      console.log(answer);
    }, function () {
      console.log('Dialog closed');
    });
  }

}

MessengerCardController.$inject = ['$mdDialog'];

export { MessengerCardController };
