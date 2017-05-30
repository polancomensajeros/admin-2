import _ from 'lodash';

const prices = ($http, $q) => {
   let allPrices = [];
   let filters = [];


  /**
   * Gets all the prices paginated
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
        url: '/get-prices',
        headers: {
            'Content-Type': 'application/json'
        },
        params: data
    };

    return $http(req);
  };

  const getState = () =>{
    return allPrices;
  }

  const getFilters = () =>{
    return filters;
  }

  const setFilters = (newFilters) =>{
    filters = newFilters;
  }


  return {get, getState, getFilters, setFilters};
};

prices.$inject = ['$http', '$q'];

export {prices};
