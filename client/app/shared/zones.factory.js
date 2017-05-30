import _ from 'lodash';

const zones = ($http, $q) => {
   let allZones = [];
   let filters = [];

  /**
   * Gets all the zones paginated
   * @param {int} page The page to ask for
   * @param {int} itemsPerPage The number of items per page
   * @returns {Object} $promise object
   */
  const get = function(page, itemsPerPage, orderColumnName, filter = false, filterName = false) {
    let data = {
        page: page,
        limit: itemsPerPage
    };
    let order = 'ASC';
    let orderName = orderColumnName;
    let splitedOrder = orderName.split('');
    if(splitedOrder[0] === '-') {
        order = 'DESC';
        orderName = orderName.slice(1);
    };
    data.order = order;
    data.order_name = orderName;
    if(filter && filterName){
        data.filter = filter;
        data.filter_name = filterName;
    }
    const req = {
        method: 'GET',
        url: '/get-zones',
        headers: {
            'Content-Type': 'application/json'
        },
        params: data
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

  const getFilters = () =>{
      return filters;
  }

  const setFilters = (newFilters) =>{
    filters = newFilters;
  }

  return {get, create, toggleZone, getFilters, setFilters};
};

zones.$inject = ['$http', '$q'];

export {zones};
