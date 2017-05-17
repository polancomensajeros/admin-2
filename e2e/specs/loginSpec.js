var loginPage = require('../pages/loginPage.js');
var variables = require('../helpers/variables.js');

describe('Login to the application', function() {

  it('Should navigate to login page', function(){
      loginPage.go();
  }, variables.MAX_SAFE_TIMEOUT);

  it('Should prevent form submission if form is dirty', function(){
    loginPage.email.sendKeys('aasdlasdfasdffkjasdf');
    // Password is required and email is invalid, it should prevent form submission
    expect(loginPage.loginBtn.getAttribute('disabled')).toEqual('true');
    
    loginPage.resetForm();
    loginPage.email.sendKeys('s.polanco@mensajerosurbanos.com');
    loginPage.password.sendKeys('aasdlasdfasdffkjasdf');
    // Password and valid email present, input should be enabled
    expect(loginPage.loginBtn.getAttribute('disabled')).toEqual(null);

    loginPage.loginBtn.click();
    // 1 second sleep to wait the toast to render
    browser.sleep(variables.SLEEP_TIME);
    expect(loginPage.errorToast.getText()).toEqual(loginPage.errorToastText);

    loginPage.resetForm();
    loginPage.email.sendKeys(loginPage.userEmail);
    loginPage.password.sendKeys(loginPage.userPass);
    loginPage.loginBtn.click();
    browser.sleep(variables.SLEEP_TIME);
    // Valid credentials it should redirect to the home state

    expect(browser.getCurrentUrl()).toBe(variables.ADMIN_PATH + variables.DASHBOARD_STATE);

    browser.sleep(variables.SLEEP_TIME);
  });

});
