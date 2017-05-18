/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

class dispActiveZoneModalController {
  constructor($mdDialog, $timeout, $mdPanel) {
    this.mdDialog = $mdDialog;
    this.timeout = $timeout;
    this.mdPanel = $mdPanel;
    this.dateTime = new Date();
    this.date = new Date();
    this.addresses = [];

    this.desserts = [
      'Apple Pie',
      'Donut',
      'Fudge',
      'Cupcake',
      'Ice Cream',
      'Tiramisu'
    ];

    for (var i = 0; i < 4; i++) {
      this.addresses.push({
        name: 'Carrera falsa 123',
        description: 'Chia aute  venmo, keffiyeh labore wolf lomo.  Brunch selfies flannel helvetica'
      });
    }

  }

  openPanel(ev) {
    var position = this.mdPanel.newPanelPosition()
      .relativeTo('.demo-menu-open-button')
      .addPanelPosition(this.mdPanel.xPosition.ALIGN_START, this.mdPanel.yPosition.BELOW);

    var config = {
      attachTo: angular.element(document.body),
      controller: function(mdPanelRef){
         let vm = this;
         this.mdPanelRef = mdPanelRef;
         this.fruitNames = ['Pepe Colubi', 'Juan Polanco', 'Soy otro señor'];

         vm.close = function(){
           console.log('Cerrando el panel');
           this.mdPanelRef.close();
         }
      },
      controllerAs: 'vm',
      template: `
        <md-card>
          <md-card-title>
            <span class="md-subhead">Agregar mensajeros<span>
          </md-card-title>
          <md-card-content>
             <md-chips placeholder="Nombre del mensajero" ng-model="vm.fruitNames" readonly="false"></md-chips>
          </md-card-content>
          <md-card-actions layout="row" layout-align="end center">
            <md-button ng-click="vm.close()">
              Cancelar
            </md-button>
            <md-button class="md-primary">
              Agregar
            </md-button>
          </md-card-actions>
        </md-card>
      `,
      panelClass: 'demo-menu-example',
      position: position,
      locals: {
        'selected': this.selected,
        'desserts': this.desserts
      },
      openFrom: ev,
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: true,
      zIndex: 80
    };

    this.mdPanel.open(config);
  }

}

dispActiveZoneModalController.$inject = ['$mdDialog', '$timeout', '$mdPanel'];

export { dispActiveZoneModalController };

