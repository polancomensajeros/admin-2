/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

class ServiceDetailViewController {
  constructor(Titles) {
    Titles.setTopbarTitle('Detalle del servicio');
  }
}

ServiceDetailViewController.$inject = ['Titles'];

export {ServiceDetailViewController};
