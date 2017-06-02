/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

class createSpotModalController {
  constructor($mdDialog, $timeout, Cities, Companies, Spots, $q, $rootScope, $cookies) {
    this.mdDialog = $mdDialog;
    this.timeout = $timeout;
    this.cities = Cities.getState();
    this.city = this.cities[0];
    this.Companies = Companies;
    this.Spots = Spots;
    this.q = $q;
    this.user = $cookies.getObject('user');
    this.rootScope = $rootScope;
  }

  /**
   * Autocomplete companies
   * @param {string} query text to search for
   */
  companiesSearch(query){
    let deferred = this.q.defer();
    this.Companies.search(query).then(function(res){
      if(angular.isDefined(res.data.data)){
        deferred.resolve(res.data.data);
      }else{
        deferred.resolve([]);
      }
    });
    return deferred.promise;
  }
  
  /**
   * Creates a new spot (store)
   */
  createSpot(){
    const self = this;
    self.creatingSpot = true;
    const data = {
      id_user: parseInt(self.user.id),  
      id_point: self.clientId,  
      name: self.name,  
      address: self.address,  
      city: self.city.id,  
      phone: self.phone, 
      schedule: self.schedule, 
      parking: self.parking, 
      id_company: parseInt(self.selectedCompany.id) 
    }
    self.Spots.create(data).then(function(){
      self.rootScope.simpleToast('Punto creado');
      // Broadcast the getTableData function
      self.rootScope.$broadcast('spotCreated');
      self.creatingSpot = false;
      self.mdDialog.cancel();
    }, function(res){
      self.rootScope.simpleToast(res.data.message);
      self.creatingSpot = false;
    });
  }

  /**
   * Closes the dialog
   */
  cancel() {
    this.mdDialog.cancel();
  };

}

createSpotModalController.$inject = ['$mdDialog', '$timeout', 'Cities', 'Companies', 'Spots', '$q', '$rootScope', '$cookies'];

export { createSpotModalController };
