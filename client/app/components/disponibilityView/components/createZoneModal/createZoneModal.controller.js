/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

class createZoneModalController {
  constructor($rootScope, $cookies, $mdDialog, $timeout, $mdPanel, Cities, Zones) {

    this.rootScope = $rootScope;
    this.mdDialog = $mdDialog;
    this.cities = Cities.getState();
    this.city = this.cities[0];
    this.timeout = $timeout;
    this.Zones = Zones;
    console.log($cookies.getObject('user'));
    this.user = $cookies.getObject('user');
    const self = this;
    $timeout(function(){
      self.initMap();
      self.centerMap(self.cities[0]);
    }, 100);
    this.zonePolygon = [];
  }

  cancel(){
    this.mdDialog.cancel();
  }
  
  centerMap(city){
    const location = ol.proj.transform([city.longitud, city.latitude], 'EPSG:4326', 'EPSG:3857');
    this.map.getView().setCenter(location);
    this.map.getView().setZoom(13)
  }

  initMap(){
    const self = this;

    this.raster = new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicG9sYW5jb21lbnNhamVyb3MiLCJhIjoiY2oxZTA5eGJwMDAzaDJxa2V2MmhrYmJlaCJ9.dPXLNDhHsxUls7hkNLjTPQ'
      })
    });

    this.source = new ol.source.Vector({wrapX: false});

    this.vector = new ol.layer.Vector({
      source: self.source
    });

    this.map = new ol.Map({
      layers: [self.raster, self.vector],
      target: 'map',
      view: new ol.View({
        center: [-11000000, 4600000],
        zoom: 4
      })
    });

    this.draw = new ol.interaction.Draw({
      source: self.source,
      type: 'Polygon'
    });

    this.draw.on('drawend', function(){
      self.timeout(function(){
        const currenFeatures = self.vector.getSource().getFeatures();  
        if(currenFeatures.length > 1){
          self.source.removeFeature(currenFeatures[0]);
        }
        const finalFeatures = self.vector.getSource().getFeatures();  
        self.zonePolygon = finalFeatures[0].getGeometry().getCoordinates()[0];
      }, 100);
    });

    this.map.addInteraction(self.draw);
  }

  createZone(city, name, polygon){
    const self = this;
    let polygonStr = '';
    polygon.forEach(function(point) {
     const pointLatLonged = ol.proj.transform(point, 'EPSG:3857', 'EPSG:4326')
     polygonStr += pointLatLonged[0] + ' ' + pointLatLonged[1] + ','; 
    });
    polygonStr = polygonStr.slice(0, -1);
    this.Zones.create(city.id, name, polygonStr, self.user.id).then(function(){
      self.rootScope.simpleToast('Zona guardada', 'bottom right');
      self.cancel();
    }, function(){
      self.rootScope.simpleToast('Ocurrio un error en el servidor, intentelo de nuevo', 'bottom right');
    });
  }

}

createZoneModalController.$inject = ['$rootScope', '$cookies', '$mdDialog', '$timeout', '$mdPanel', 'Cities', 'Zones'];

export { createZoneModalController };

