/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import {ServiceMapController} from '../serviceMap/serviceMap.controller';

// Class representing a AlertsMap
class AlertsMapController extends ServiceMapController{
  constructor(olData, $timeout) {
    super(olData, $timeout);
    this.showFilters = true;
  }

  resizeMap(){
    this.showFilters = !this.showFilters;
    super.resizeMap();
  }

}

AlertsMapController.$inject = ['olData', '$timeout'];

export {AlertsMapController};
