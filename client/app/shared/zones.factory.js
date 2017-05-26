import _ from 'lodash';

const zones = ($http, $q) => {
    let allZones = [];

  /**
   * Gets all the zones paginated
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
   * Creates a new zone
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

  /**
   * Toggles the state of a zone
   * @param {int} zoneId the zone id
   * @param {int} status the status
   * @param {int} userId the user id
   */
  const toggleZone = (zoneId, status, userId) =>{
    const data = {
        id_zone: zoneId,
        status: status,
        id_user: parseInt(userId)
    };
    const req = {
        method: 'POST',
        url: '/toggle-zone',
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

  return {get, create, toggleZone};
};

zones.$inject = ['$http', '$q'];

export {zones};
