/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import muLogo from '../../../images/logo-mu.png';

class SideBarController {
  constructor($state) {
    this.state = $state;
    this.greeting = 'SideBarController!';
    this.muLogo = muLogo;
    this.navIcons = [
      {
        icon: 'assignment',
        name: 'Servicio',
        sref: 'serviceDetailView'
      },
      {
        icon: 'directions_bike',
        name: 'Mensajero',
        sref: 'messengerDetailView'
      }
    ]
  }

}

SideBarController.$inject = ['$state'];

export {SideBarController};
