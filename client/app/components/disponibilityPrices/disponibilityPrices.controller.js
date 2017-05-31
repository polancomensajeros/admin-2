/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */
import { Table } from '../../classes/tableClass';

class DisponibilityPricesController extends Table {
  constructor($mdDialog, Prices, $rootScope, $scope, $cookies, $interval, $mdEditDialog) {
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
    $scope.$on('getPrices', function () {
      $scope.getData();
    });

    /**
     * Gets the filtered data from the factory
     */
    $scope.$on('filterPrices', function (event, args) {
      self.filter = args.filter;
      self.filterName = args.filterName;
      $scope.getData();
    });

    /**
     * Edits a price, is binded to the $scope because the md-data-table forces
     * you to use the $scope over the controllerAs syntax
     * @param {event} event Events that triggers the function
     * @param {int} priceId Id of the price to edit
     * @param {Object} price object price to edit
     * @param {string} priceType hour to edit
     */
    $scope.editPrice = function (event, priceId, price, priceType) {
      event.stopPropagation(); // in case autoselect is enabled

      var editDialog = {
        modelValue: price,
        placeholder: 'Nueva tarifa',
        save: function (input) {
          Prices.updatePrice(priceId, { [priceType] : parseInt(input.$viewValue) }).then(function(res){
            $scope.getData();
            $rootScope.simpleToast(res.data.message);
          }, function(res){
            $rootScope.simpleToast(res.data.message);
          });
        },
        targetEvent: event,
        validators: {
          'md-maxlength': 5
        }
      };

      var promise;
      promise = $mdEditDialog.small(editDialog);

      promise.then(function (ctrl) {
        var input = ctrl.getInput();
      });
    };

    this.mdDialog = $mdDialog;
    this.Prices = Prices;
    this.rootScope = $rootScope;
    this.user = $cookies.getObject('user');

    $interval(function () {
      let d = new Date();
      self.currentHour = d.getHours();
    }, 1000)
  }

}

DisponibilityPricesController.$inject = ['$mdDialog', 'Prices', '$rootScope', '$scope', '$cookies', '$interval', '$mdEditDialog'];

export { DisponibilityPricesController };

