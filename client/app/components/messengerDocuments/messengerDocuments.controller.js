/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

// Import child components
import historyModal from './components/historyModal/historyModal.html';
import { historyModalController as historyModalController } from './components/historyModal/historyModal.controller';

import uploadModal from './components/uploadModal/uploadModal.html';
import { uploadModalController as uploadModalController } from './components/uploadModal/uploadModal.controller';

// Class representing a MessengerDocuments
class MessengerDocumentsController {
  constructor($mdDialog) {
    this.mdDialog = $mdDialog;
  }

  showHistoryModal(ev){
    this.testingModals(ev, historyModal, historyModalController);
  }

  showUploadModal(ev){
    this.testingModals(ev, uploadModal, uploadModalController);
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

MessengerDocumentsController.$inject = ['$mdDialog'];

export {MessengerDocumentsController};
