/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

// Class representing a AlertsMap
class AlertsMapController{
  constructor(olData, $timeout) {
    this.showFilters = false;
    this.olData = olData;
    this.timeout = $timeout;
  }

  resizeMap(){
    this.showFilters = !this.showFilters;
    let self = this;
    this.timeout(function(){ 
      self.olData.getMap().then(function(map) {
        map.updateSize();
      });
    }, 0.1);
  }

}

AlertsMapController.$inject = ['olData', '$timeout'];

export {AlertsMapController};
