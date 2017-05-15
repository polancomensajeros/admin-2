/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import muLogo from '../../../images/logo-mu.png';

class SideBarController {
  constructor($state, $rootScope) {
    this.rootScope = $rootScope;
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
      },
      {
        icon: 'warning',
        name: 'Alertas',
        sref: 'alertsView'
      },
      {
        icon: 'directions_bike',
        name: 'Editar mensajero',
        sref: 'editMessengerView'
      },
      {
        icon: 'gps_fixed',
        name: 'Disponi...',
        sref: 'disponibilityView'
      },
      {
        icon: 'face',
        name: 'Login',
        sref: 'loginView'
      }
    ]
  }

  toggleSideNav() {
    this.rootScope.toggleSideNav();
  }

}

SideBarController.$inject = ['$state', '$rootScope'];

export { SideBarController };
