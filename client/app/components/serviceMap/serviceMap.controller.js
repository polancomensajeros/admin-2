class ServiceMapController {

  constructor(olData, $timeout) {
    this.olData = olData;
    this.center = {
      lat: 51.505,
      lon: -0.09,
      zoom: 8
    }
    const self = this;
    $timeout(function(){ 
      self.resizeMap() 
    }, 1);
  }

  resizeMap(){
    this.olData.getMap().then(function(map) {
      map.updateSize();
    });
  }

}

ServiceMapController.$inject = ['olData', '$timeout'];

export {ServiceMapController};
