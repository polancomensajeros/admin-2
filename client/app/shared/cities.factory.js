import _ from 'lodash';

const cities = ($http, $q, localStorageService) => {
  let allCities = [];

  const get = function(status = 1) {
    const stringData = 'status=' + status;
    const req = {
        method: 'POST',
        url: '/cities',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: stringData
    };

    return $http(req).then(function(res){
        // If call is succesfull, save cities in LS
        const apiCities = res.data.data;
        localStorageService.set('cities', apiCities);
        allCities = localStorageService.get('cities');
    }, function(){
        // If the call fails, send the cities in LS
        allCities = localStorageService.get('cities');
    });
  };

  const getState = function() {
    return allCities;
  };

  return {get, getState};
};

cities.$inject = ['$http', '$q', 'localStorageService'];

export {cities};
