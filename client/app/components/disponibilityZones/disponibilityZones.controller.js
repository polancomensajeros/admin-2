/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */
import viewZoneModal from './components/viewZoneModal/viewZoneModal.html';
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
    self.loadingZones = true;
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

  testingModals(ev, template) {

  }

  openViewZoneModal(ev, polygons){
    const self = this;
    this.mdDialog.show({
      controller: function($timeout){
      let vm = this;
      let points = polygons.split(',');
      let pointsArray = [];
      for (var i in points) {
        const latLon = points[i].split(' ');
        const pointerPoint = ol.proj.fromLonLat([parseFloat(latLon[0]), parseFloat(latLon[1])], 'EPSG:3857', 'EPSG:4326');
        pointsArray.push([pointerPoint[0], pointerPoint[1]]);
      }

      let polygon = new ol.geom.Polygon([pointsArray]);

      const feature = new ol.Feature(polygon);

      // Create vector source and the feature to it.
      const vectorSource = new ol.source.Vector();
      vectorSource.addFeature(feature);

      // Create vector layer attached to the vector source.
      const vectorLayer = new ol.layer.Vector({
        source: vectorSource
      });

      $timeout(function(){
        vm.initMap();
      }, 100);

      vm.initMap = function(){

        vm.raster = new ol.layer.Tile({
          source: new ol.source.XYZ({
            url: 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicG9sYW5jb21lbnNhamVyb3MiLCJhIjoiY2oxZTA5eGJwMDAzaDJxa2V2MmhrYmJlaCJ9.dPXLNDhHsxUls7hkNLjTPQ'
          })
        });

        vm.source = new ol.source.Vector({wrapX: false});

        vm.vector = new ol.layer.Vector({
          source: self.source
        });

        vm.map = new ol.Map({
          layers: [vm.raster, vm.vector],
          target: 'map',
          view: new ol.View({
            center: [-11000000, 4600000],
            zoom: 4
          })
        });

        // Add the vector layer to the map.
        vm.map.addLayer(vectorLayer);
        var extent = vectorLayer.getSource().getExtent();
        vm.map.getView().fit(extent, vm.map.getSize());
      }

      },
      controllerAs: 'vm',
      template: viewZoneModal,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: true
    })
    .then(function (answer) {
      //self.getZones();
    }, function () {
      //self.getZones();
    });
  }

}

DisponibilityZonesController.$inject = ['$timeout', '$mdDialog', '$mdPanel', 'Zones', '$rootScope', '$scope'];

export { DisponibilityZonesController };
