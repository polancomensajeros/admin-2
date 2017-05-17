'use strict';

module.exports = {

  selectDropdownByText: function (element, text) {
    if (text){
      element(by.cssContainingText('option', text)).click();
    }
  },

  selectDropdownByNum : function (element, optionNum) {
    if (optionNum){
      var options = element.all(by.tagName('option'))
        .then(function(options){
          options[optionNum].click();
        });
    }
  }

};
