/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

// Class representing a EditMessengerView

class EditMessengerViewController {
  constructor(Titles) {
    Titles.setTopbarTitle('Editar información del mensajero');
  }

}

EditMessengerViewController.$inject = ['Titles'];

export {EditMessengerViewController};
