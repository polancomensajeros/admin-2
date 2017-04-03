import muLogo from '../../../images/logo-mu.png';

class SideBarController {
  constructor() {
    this.greeting = 'SideBarController!';
    this.muLogo = muLogo;
    this.navIcons = [
      {
        icon: 'warning',
        name: 'Alertas'
      },
      {
        icon: 'room',
        name: 'Activación'
      },
      {
        icon: 'content_paste',
        name: 'Servicios'
      }
    ]
  }

}

SideBarController.$inject = [];

export {SideBarController};
