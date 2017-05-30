/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */
import { Table } from '../../classes/tableClass';

class DisponibilityPricesController extends Table {
  constructor($mdDialog, Prices, $rootScope, $scope, $cookies, $interval) {
    // This is a table controller, so it extends from the Table class
    super(1, 10, Prices, $scope, $rootScope, 'name');
    const self = this;
    /**
     * Is mandatory for each table that extends the Table class to bind the
     * super getData() function to the controller $scope  
     */
    $scope.getData = () => super.getData();
    super.getData();
    
    /**
     * After a Prices is created retrieve the Prices again
     */
    $scope.$on('getPrices', function(){
      $scope.getData();
    });

    $scope.$on('filterPrices', function(event, args){
      self.filter = args.filter;
      self.filterName = args.filterName;
      $scope.getData();
    });

    this.mdDialog = $mdDialog;
    this.Prices = Prices;
    this.rootScope = $rootScope;
    this.user = $cookies.getObject('user');
    
    $interval(function(){
      let d = new Date();
      self.currentHour = d.getHours();
    }, 1000)
  }

}

DisponibilityPricesController.$inject = ['$mdDialog', 'Prices', '$rootScope', '$scope', '$cookies', '$interval'];

export { DisponibilityPricesController };

