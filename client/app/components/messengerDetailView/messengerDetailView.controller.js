/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

class MessengerDetailViewController {
  constructor(Titles) {
    Titles.setTopbarTitle('Detalle del mensajero');
  }

}

MessengerDetailViewController.$inject = ['Titles'];

export {MessengerDetailViewController};
