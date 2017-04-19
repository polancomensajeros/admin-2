/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

// Import modal child components
import blockModal from './components/blockModal/blockModal.html';
import { blockModalController as blockController } from './components/blockModal/blockModal.controller';

class MessengerCardController {

  constructor($mdDialog) {
    this.mdDialog = $mdDialog;
  }

  showBlockModal(ev) {
    const self = this;
    this.mdDialog.show({
      controller: blockController,
      controllerAs: 'vm',
      template: blockModal,
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
