/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

// Class representing a Alerts

class AlertsController {
  constructor() {
    this.selected = [];
    this.query = {
      order: 'name',
      limit: 5,
      page: 1
    };
    this.desserts = [];
    this.start = new Date();
    this.end = new Date();
    for (let i = 0; i < 500; i++) {
      this.desserts.push({
        service: 'af879as8d77f' + i,
        date: '17:15',
        description: 'Sandy',
        price: 'Hernandez Jhonatan',
        ammount: 'Bogotá',
        bill: 'Nadia Alvarez',
        created: 'Domicilios'
      });
    }
  }

}

AlertsController.$inject = [];

export { AlertsController };
