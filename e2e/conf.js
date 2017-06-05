exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    //'specs/loginView/loginSpec.js', // LoginView
    'specs/disponibilityView/disponibilityZonesSpec.js', // Zones tab inside disponibilityView
    'specs/disponibilityView/disponibilitySpotsSpec.js'  // Spots tab inside disponibilityView
  ], 
  onPrepare: function () {
    var width = 1366;
    var height = 1024;
    browser.driver.manage().window().setSize(width, height);
  }
};
