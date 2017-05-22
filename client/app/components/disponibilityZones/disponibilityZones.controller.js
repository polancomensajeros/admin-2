/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */
import viewZoneModal from './components/viewZoneModal/viewZoneModal.html';
import { viewZoneModalController as viewZoneModalController } from './components/viewZoneModal/viewZoneModal.controller';
// Class representing a DisponibilitySpots element

class DisponibilityZonesController {
  constructor($timeout, $mdDialog, $mdPanel, Zones, $rootScope, $scope) {
    this.Zones = Zones;
    this.mdDialog = $mdDialog;
    this.timeout = $timeout;
    this.rootScope = $rootScope;
    this.query = {
      order: 'name',
      limit: 5,
      page: 1,
      totalZones: 0
    };
    this.loadingZones = true;
    this.$scope = $scope;
    $scope.getZones = () => this.getZones();
    this.getZones();
  }

  getZones(){
    const self = this;
    this.Zones.get(this.query.page, this.query.limit).then(function(res){
      self.loadingZones = false;
      self.zones = res.data.data.result;
      self.query.totalZones = res.data.data.total_item;
    }, function(res){
      self.rootScope.simpleToast(res.data.data.message);
      self.loadingZones = false;
    });
  }

  closeModal() {
    this.mdDialog.hide();
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

  openMenu(menu, delay = 0) {
    this.timeout(function () {
      menu.open();
    }, delay);
  }

  openViewZoneModal(ev){
    this.testingModals(ev, viewZoneModal, viewZoneModalController);
  }

}

DisponibilityZonesController.$inject = ['$timeout', '$mdDialog', '$mdPanel', 'Zones', '$rootScope', '$scope'];

export { DisponibilityZonesController };
