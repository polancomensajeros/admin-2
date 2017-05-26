/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

/**
 * Father class of all the tables
 */
class Table {

  /**
   * Instantiates a Table object
   * @param {int} page page to get
   * @param {int} limit items per page
   * @param {Factory} tableFactory factory with the data functions
   * @param {$scope} $scope $scope of the table
   * @param {$rootScope} $rootScope $rootScope of the table
   * @param {string} orderName column to order with
   * @param {string} filter text to filter
   * @param {string} filterName name of the column to filter
   */
  constructor(page, limit, tableFactory, $scope, $rootScope, orderName, filter, filterName) {
    this.page = page;
    this.limit = limit;
    this.tableFactory = tableFactory;
    this.scope = $scope;
    this.rootScope = $rootScope;
    this.orderName = orderName;
    this.filter = filter;
    this.filterName = filterName;
    this.total = 0;
    this.scope.getData = () => this.getData();
  }

  /**
   * Gets the data from the given factory
   */
  getData() {
    const self = this;
    self.loadingData = true; // Show loading indicator
    self.tableFactory.get(this.page, this.limit, this.orderName, this.filter, this.filterName).then(function (res) {
      self.loadingData = false;
      self.tableData = res.data.data;
      self.total = res.data.properties.total_rows;
    }, function (res) {
      self.loadingData = false;
      self.rootScope.simpleToast(res.data.message);
    });
  }

}

export { Table };
