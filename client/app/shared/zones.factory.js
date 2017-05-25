import _ from 'lodash';

const zones = ($http, $q) => {
    let allZones = [];

  /**
   * @param {int} page The page to ask for
   * @param {int} itemsPerPage The number of items per page
   * @returns {Object} $promise object
   */
  const get = function(page, itemsPerPage) {
    const data = {
        currentPage: page,
        item_for_page: itemsPerPage
    };
    const req = {
        method: 'POST',
        url: '/get-zones',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    return $http(req);
  };

  /**
   * @param {int} cityId id of the city
   * @param {string} name The name of the city
   * @param {string} polygon String with the data of the polygon
   * @param {int} userId Id of the user that's creating the zone
   * @returns {Object} a $promise object
   */
  const create = (cityId, name, polygon, userId) =>{
    const data = {
        id_city: cityId,
        name: name,
        polygons: polygon,
        id_user: parseInt(userId)
    };
    const req = {
        method: 'POST',
        url: '/create-zone',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    return $http(req);
  }

  const getState = () =>{
    return allZones;
  }

  return {get, create};
};

zones.$inject = ['$http', '$q'];

export {zones};
