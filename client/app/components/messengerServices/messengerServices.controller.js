/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

// Class representing a MessengerServices

class MessengerServicesController {
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
    for(let i = 0; i < 10; i++){
      this.desserts.push({
        service: 'af879as8d77f' + i,
        date: '17-Nov-2016 / 17:23:32',
        description: 'Farmatodo',
        price: 'Mensajería',
        ammount: 'En espera',
        bill: '$1987',
        created: '4.00'
      });
    }
  }

  success(desserts){
    this.desserts = desserts;
  }

  getDesserts(){
    this.promise = $nutrition.desserts.get(this.query, this.success).$promise;
  }

}

MessengerServicesController.$inject = [];

export {MessengerServicesController};
