/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */
import viewZoneModal from './components/viewZoneModal/viewZoneModal.html';
import { Table } from '../../classes/tableClass';

class DisponibilityZonesController extends Table {
  constructor($mdDialog, Zones, $rootScope, $scope) {
    // This is a table controller, so it extends from the Table class
    super(5, 1, 'ASC', 'id', Zones, $rootScope, $scope);

    this.mdDialog = $mdDialog;
    
    /**
     * Is mandatory for each table that extends the Table class to bind the
     * super getData() function to the controller $scope  
     */
    $scope.getData = () => super.getData();
    super.getData();
    
    /**
     * After a zones is created retrieve the zones again
     */
    $scope.$on('getZones', function(){
      $scope.getData();
    });
  }

  /**
   * Closes the mdDialog instance
   */
  closeModal() {
    this.mdDialog.hide();
  }

  /**
   * Opens the view zone modl
   * @param {$event} ev event that triggers the function
   * @param {string} polygons String with the latLon data of the polygon
   */
  openViewZoneModal(ev, polygons) {
    const self = this;
    this.mdDialog.show({
      controller: function ($timeout) {

        let vm = this;
        // Polygon data uses the format 'lat lon, lat lon, lat lon' so the first
        // step is splitting the coordinates with the comma (,) separator
        let points = polygons.split(',');
        let pointsArray = [];
        // The coordinates are in latlon format, in order to display the polygon
        // in the map they should be converted to Points
        for (var i in points) {
          const latLon = points[i].split(' ');
          const pointerPoint = ol.proj.fromLonLat([parseFloat(latLon[0]), parseFloat(latLon[1])], 'EPSG:3857', 'EPSG:4326');
          // Push the point to the array
          pointsArray.push([pointerPoint[0], pointerPoint[1]]);
        }
        // Create a polygon using the points array
        let polygon = new ol.geom.Polygon([pointsArray]);
        // Add the polygon to Feature
        const feature = new ol.Feature(polygon);
        // Create vector source and add the feature to it
        const vectorSource = new ol.source.Vector();
        vectorSource.addFeature(feature);
        // Create vector layer attached to the vector source.
        const vectorLayer = new ol.layer.Vector({
          source: vectorSource
        });
        // Initialize map
        $timeout(function () {
          vm.initMap();
        }, 100);

        /**
         * Initializes the map
         */
        vm.initMap = function () {
          
          vm.raster = new ol.layer.Tile({
            source: new ol.source.XYZ({
              // Mapbox theme
              url: 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicG9sYW5jb21lbnNhamVyb3MiLCJhIjoiY2oxZTA5eGJwMDAzaDJxa2V2MmhrYmJlaCJ9.dPXLNDhHsxUls7hkNLjTPQ'
            })
          });

          vm.source = new ol.source.Vector({ wrapX: false });

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
          // Center the map bounds into the zone
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
    .then(function () {
      // 
    }, function () {
      // Modal closed - Do something if you want
    });
  }

}

DisponibilityZonesController.$inject = ['$mdDialog', 'Zones', '$rootScope', '$scope'];

export { DisponibilityZonesController };
