/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

class TopBarController {
  constructor($q, $timeout, Titles, $rootScope) {
    this.rootScope = $rootScope;
    this.title = Titles.getTopbarTitle();
    this.simulateQuery = true;
    this.states = this.loadAll();
    this.searchText = '';
  }

  setTitle(title){
    this.title = title;
  }

  logout(){
    this.rootScope.logout();
  }

  querySearch(query) {
    let results = query ? this.states.filter(this.createFilterFor(query)) : this.states;
    return results;
  }

  loadAll() {
    let allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

      return allStates.split(/, +/g).map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
      });
  }

  createFilterFor(query) {
    let lowercaseQuery = angular.lowercase(query);

    return function filterFn(state) {
      return (state.value.indexOf(lowercaseQuery) === 0);
    };

  }

  toggleSideNav() {
    this.rootScope.toggleSideNav();
  }

}

TopBarController.$inject = ['$q', '$timeout', 'Titles', '$rootScope'];

export { TopBarController };
