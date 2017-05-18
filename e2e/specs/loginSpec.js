var loginPage = require('../pages/loginPage.js');
var variables = require('../helpers/variables.js');

describe('Login to the application', function () {

  it('Should navigate to login page', function () {
    loginPage.go();
  }, variables.MAX_SAFE_TIMEOUT);

  it('Should prevent form submission if form is dirty', function () {
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
    expect(loginPage.errorToast.getText()).toEqual(loginPage.loginErrorToastText);
  });

  it('Should login an user', function () {
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

describe('Send recovery instructions', function(){
  it('Should show and hide the recovery password form', function(){
    loginPage.go();
    // Hide and show the recovery password btn
    loginPage.iForgotPassBtn.click();
    expect(loginPage.password.isPresent()).toBe(false);
    expect(loginPage.loginBtn.isPresent()).toBe(false);
    expect(loginPage.iForgotPassBtn.isPresent()).toBe(false);
    expect(loginPage.recoverPassBtn.isPresent()).toBe(true);
    expect(loginPage.backToLoginBtn.isPresent()).toBe(true);
    loginPage.backToLoginBtn.click();
    expect(loginPage.password.isPresent()).toBe(true);
    expect(loginPage.loginBtn.isPresent()).toBe(true);
    expect(loginPage.iForgotPassBtn.isPresent()).toBe(true);
    expect(loginPage.recoverPassBtn.isPresent()).toBe(false);
    expect(loginPage.backToLoginBtn.isPresent()).toBe(false);
    loginPage.iForgotPassBtn.click();
    loginPage.email.clear();
    // Button should be disabled
    expect(loginPage.recoverPassBtn.getAttribute('disabled')).toEqual('true');
    loginPage.email.sendKeys('este.mailo@no-existe.ru');
    loginPage.recoverPassBtn.click()
    // 1 second sleep to wait the toast to render
    // It should show the correct error message
    browser.sleep(variables.SLEEP_TIME);
    expect(loginPage.errorToast.getText()).toEqual(loginPage.recoveryErrorToastText);
    loginPage.email.clear();
    loginPage.email.sendKeys('s.polanco@mensajerosurbanos.com');
    loginPage.recoverPassBtn.click();
    browser.sleep(variables.SLEEP_TIME);
    // It should show the success text
    expect(loginPage.successRecovery.getText()).toBe(loginPage.successRecoveryText);
  });
});
