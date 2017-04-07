import _ from 'lodash';

class ServiceTimelineController {
  constructor() {
    this.greeting = 'ServiceTimelineController!';
    this.events = [
      {
        hour: '02:00 PM',
        title: 'Creado',
        content: 'Servicio creado',
        color: '#afafaf'
      }
    ]
  }

  addEvent(){
    const fakeContent = [
      'Officia  locavore echo park et consectetur.  Hoodie messenger bag plaid, culpa  raclette food truck iceland velit.  Lumbersexual nulla  swag yr.  Dolor  fixie mumblecore raw denim, subway tile nihil blog.  Raclette banjo quinoa, sustainable chicharrones chillwave chambray subway tile exercitation twee keytar slow-carb laborum PBR&amp;B.',
      'Servicio asignado',
      'Mensajero perdido',
      'Fuertes lluvias'
    ]
    const pointColors = [
        '#FBBA2D',
        '#0aaac0',
        '#ff584b',
        '#afafaf'
    ]
    this.events.push({
      hour: '03:00 PM',
      title: 'Asignado',
      content: fakeContent[_.random(0, fakeContent.length - 1)],
      color: pointColors[_.random(0, pointColors.length - 1)]
    });
  }
}

ServiceTimelineController.$inject = [];

export {ServiceTimelineController};
