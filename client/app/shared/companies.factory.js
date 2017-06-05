import _ from 'lodash';

const companies = ($http, $q, localStorageService) => {
  let allCompanies = [];

  const search = function(filter) {
    const req = {
        method: 'GET',
        url: '/search-companies',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: {
            filter: filter
        }
    };

    return $http(req);
  };

  return {search};
};

companies.$inject = ['$http', '$q', 'localStorageService'];

export {companies};
