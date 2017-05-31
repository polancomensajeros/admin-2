import _ from 'lodash';

const spots = ($http, $q) => {
    let allSpots = [];
    let filters = [];


    /**
     * Gets all the spots paginated
     * @param {int} page The page to ask for
     * @param {int} itemsPerPage The number of items per page
     * @returns {Object} $promise object
     */
    const get = function (page, itemsPerPage, orderColumnName, filter = false, filterName = false) {
        let data = {
            page: page,
            limit: itemsPerPage
        };
        let order = 'ASC';
        let orderName = orderColumnName;
        let splitedOrder = orderName.split('');
        if (splitedOrder[0] === '-') {
            order = 'DESC';
            orderName = orderName.slice(1);
        };
        data.order = order;
        data.order_name = orderName;
        if (filter && filterName) {
            data.filter = filter;
            data.filter_name = filterName;
        }
        const req = {
            method: 'GET',
            url: '/get-spots',
            headers: {
                'Content-Type': 'application/json'
            },
            params: data
        };

        return $http(req);
    };

     /**
     * Toggles the state of a spot
     * @param {int} spotId the spot id
     * @param {int} status the status
     * @param {int} userId the user id
     */
    const toggleSpot = (spotId, status, userId) =>{
        const data = {
            id_store: spotId,
            status: status,
            id_user: parseInt(userId)
        };
        const req = {
            method: 'POST',
            url: '/toggle-spot',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        return $http(req);
    }

    /**
     * Get state of the spots
     */
    const getState = () => {
        return allSpots;
    }

    /**
     * Get the current filters
     */
    const getFilters = () => {
        return filters;
    }

    /**
     * Sets the current filters
     * @param {array} newFilters Array with the new filters
     */
    const setFilters = (newFilters) => {
        filters = newFilters;
    }


    return { get, getState, toggleSpot, getFilters, setFilters };
};

spots.$inject = ['$http', '$q'];

export { spots };
