/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import cancelModal from './components/cancelModal/cancelModal.html';
import { cancelModalController as cancelModalController } from './components/cancelModal/cancelModal.controller';

import relaunchModal from './components/relaunchModal/relaunchModal.html';
import { relaunchModalController as relaunchModalController } from './components/relaunchModal/relaunchModal.controller';

import bidModal from './components/bidModal/bidModal.html';
import { bidModalController as bidModalController } from './components/bidModal/bidModal.controller';

import editModal from './components/editModal/editModal.html';
import { editModalController as editModalController } from './components/editModal/editModal.controller';

class ServiceActionsController {
  constructor($mdDialog, $mdToast, $scope) {
    this.greeting = 'ServiceActionsController!';
    this.mdDialog = $mdDialog;
    this.mdToast = $mdToast;
    this.scopeAll = $scope;
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

  endServiceModal(ev) {
    let confirm = this.mdDialog.prompt()
      .title('Finalizar Servicio')
      .textContent('Porque se finaliza el servicio?')
      .placeholder('Descripción')
      .ariaLabel('Descripción')
      .initialValue('')
      .targetEvent(ev)
      .ok('Finalizar servicio')
      .cancel('Cancelar');

    const self = this;

    this.mdDialog.show(confirm).then(function (result) {
      self.mdToast.show(
        self.mdToast.simple()
          .textContent('Servicio finalizado')
          .position('bottom right')
          .hideDelay(4000)
      );
    });
  }

  cancelServiceModal(ev) {
    this.testingModals(ev, cancelModal, cancelModalController);
  }

  closeModal() {
    this.mdDialog.hide();
  }

  editServiceModal(ev) {
    this.testingModals(ev, editModal, editModalController);
  }

  bidServiceModal(ev) {
    this.testingModals(ev, bidModal, bidModalController);
  }

  relaunchServiceModal(ev) {
    this.testingModals(ev, relaunchModal, relaunchModalController);
  }

}

ServiceActionsController.$inject = ['$mdDialog', '$mdToast', '$scope'];

export { ServiceActionsController };
