/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

/**
 * Father class of all the tables
 */
class Table {

  /**
   * Creates a table object
   * @param {int} limit mac amaount of items to get
   * @param {int} page number of the page to get
   * @param {string} orderType asc or desc 
   * @param {Factory} tableFactory the factory to get the data from
   * @param {$scope} scope $scope of the table
   * @param {$rootScope} rootScope rootScope of the table
   */
  constructor(limit, page, orderType, orderField, tableFactory, $scope, $rootScope) {
    this.limit = limit;
    this.page = page;
    this.orderType = orderType;
    this.orderField = orderField;
    this.total = 0;
    this.tableFactory = tableFactory;
    this.scope = $scope;
    this.rootScope = $rootScope;
    
    this.scope.getData = () => this.getData();
  }

  /**
   * Gets the data from the given factory
   */
  getData() {
    const self = this;
    self.loadingData = true; // Show loading indicator
    self.tableFactory.get(this.page, this.limit).then(function(res){
      self.loadingData = false;
      self.tableData = res.data.data.result;
      self.total = res.data.data.total_item;
    }, function(res){
      self.loadingData = false;
      self.rootScope.simpleToast(res.data.data.message);
    });
  }

}

export {Table};
