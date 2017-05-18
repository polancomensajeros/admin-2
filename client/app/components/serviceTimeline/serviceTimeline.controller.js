/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

import _ from 'lodash';
import muLogo from '../../../images/logo-mu.png';

class ServiceTimelineController {
  constructor($interval) {
    this.greeting = 'ServiceTimelineController!';
    this.events = [];
    for(let i = 0; i < 10; i++){
      this.addEvent();
    }
    const self = this;
    $interval(function(){
      self.addEvent();
    }, 60000);
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

  triggerNotification(){
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification("Nueva notificación", {icon: muLogo});
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification("Nueva notificación", {icon: muLogo});
        }
      });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.

  }
}

ServiceTimelineController.$inject = ['$interval'];

export {ServiceTimelineController};
