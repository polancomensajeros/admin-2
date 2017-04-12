import cancelModal from './cancelModal.html';
import {cancelModalController as cancelController} from './cancelModal.controller';

import relaunchModal from './relaunchModal.html';
import {relaunchModalController as relaunchController} from './relaunchModal.controller';

class ServiceActionsController {
  constructor($mdDialog, $mdToast, $scope) {
    this.greeting = 'ServiceActionsController!';
    this.mdDialog = $mdDialog;
    this.mdToast = $mdToast;
    this.scopeAll = $scope;
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
    const self = this;
    this.mdDialog.show({
      controller: cancelController,
      template: cancelModal,
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

  closeModal(){
    this.mdDialog.hide();
  }

  editServiceModal() { }

  bidServiceModal() { }

  relaunchServiceModal(ev) {
    const self = this;
    this.mdDialog.show({
      controller: relaunchController,
      template: relaunchModal,
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

ServiceActionsController.$inject = ['$mdDialog', '$mdToast', '$scope'];

export { ServiceActionsController };
