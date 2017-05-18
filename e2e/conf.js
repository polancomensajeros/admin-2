exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/loginSpec.js'],
  onPrepare: function () {
    var width = 1366;
    var height = 768;
    browser.driver.manage().window().setSize(width, height);
  }
};
