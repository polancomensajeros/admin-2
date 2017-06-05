/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */
import { Table } from '../../classes/tableClass';

class DisponibilitySpotsController extends Table {
  constructor($mdDialog, Spots, $rootScope, $scope, $cookies, $timeout, $mdPanel) {
    // This is a table controller, so it extends from the Table class
    super(1, 10, Spots, $scope, $rootScope, 'name');
    const self = this;
    /**
     * Is mandatory for each table that extends the Table class to bind the
     * super getData() function to the controller $scope  
     */
    $scope.getData = () => super.getData();
    super.getData();

    /**
     * After a Spots is created retrieve the Spots again
     */
    $scope.$on('getSpots', function () {
      $scope.getData();
    });

    /**
     * Gets the filtered data from the factory
     */
    $scope.$on('filterSpots', function (event, args) {
      self.filter = args.filter;
      self.filterName = args.filterName;
      $scope.getData();
    });

    this.mdDialog = $mdDialog;
    this.Spots = Spots;
    this.rootScope = $rootScope;
    this.timeout = $timeout;
    this.user = $cookies.getObject('user');
  }

  openMenu(menu, delay = 0) {
    this.timeout(function () {
      menu.open();
    }, delay);
  }

   /**
   * Toggles the state of one of the spots
   */
  toggleSpot(spot){
    const self = this;
    const newStatus = spot.status === 'Activo' ? 1 : 0;
    const statusText = spot.status === 'Activo' ? 'Punto activado!' : 'Punto desactivado!';
    this.Spots.toggleSpot(spot.id, newStatus, self.user.id).then(function(){
      self.rootScope.simpleToast(statusText);
    }, function(){
      self.rootScope.simpleToast('Imposible cambiar el estado!');
    });
  }

}

DisponibilitySpotsController.$inject = ['$mdDialog', 'Spots', '$rootScope', '$scope', '$cookies', '$timeout', '$mdPanel'];

export { DisponibilitySpotsController };

