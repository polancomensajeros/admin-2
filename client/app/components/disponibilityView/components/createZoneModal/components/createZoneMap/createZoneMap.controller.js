/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

// Class representing a CreateZoneMap

class CreateZoneMapController {
  constructor($timeout) {
    const self = this;
    $timeout(function(){
      self.initMap();
    }, 1000);
  }

  initMap(){
      const raster = new ol.layer.Tile({
        source: new ol.source.OSM()
      });

      const source = new ol.source.Vector({wrapX: false});

      const vector = new ol.layer.Vector({
        source: source
      });

      const map = new ol.Map({
        layers: [raster, vector],
        target: 'map',
        view: new ol.View({
          center: [-11000000, 4600000],
          zoom: 4
        })
      });

    const draw = new ol.interaction.Draw({
      source: source,
      type: 'Polygon'
    });

    map.addInteraction(draw);
  }

}

CreateZoneMapController.$inject = ['$timeout'];

export {CreateZoneMapController};
