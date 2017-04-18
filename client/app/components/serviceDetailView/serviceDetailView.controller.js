// create our controller using the
// highly controversial class
import _ from 'lodash';

class ServiceDetailViewController {
  // bind to this and not $scope
  // because of controllerAs.
  constructor() {
    this.items = _.times(5, i => {
      return `I am item ${i}`;
    });
  }
}
// could also just export the class up top as well
export {ServiceDetailViewController};
