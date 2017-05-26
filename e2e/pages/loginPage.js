'use strict';

var variables = require('../helpers/variables.js');

module.exports = {
    stateUrl: 'login',

    email :         element(by.model('vm.email')),
    password :      element(by.model('vm.password')),
    loginBtn:       element(by.css('[ng-click="vm.login()"]')),
    errorToast:     element(by.css('md-toast span')),
    loginErrorToastText: 'Usuario o contraseña incorrectos',
    userEmail:      's.polanco@mensajerosurbanos.com',
    userPass:       '1qazxsw2',
    iForgotPassBtn:  element(by.css('[ng-click="vm.forgot = true"]')),
    backToLoginBtn: element(by.css('[ng-click="vm.forgot = false"]')),
    recoverPassBtn: element(by.css('[ng-click="vm.passwordRecovery()"]')),
    recoveryErrorToastText: 'El correo electrónico enviado no se encuentra registrado',
    successRecovery: element(by.id('success-recovery')),
    successRecoveryText: 'Se ha enviado un correo electrónico con las instrucciones para cambiar la contraseña, por favor verífique.',
    /**
     * Logins an user
     */
    login: function(){
        this.go();
        this.resetForm();
        this.email.sendKeys(this.userEmail);
        this.password.sendKeys(this.userPass);
        this.loginBtn.click();
        browser.sleep(variables.SLEEP_TIME);
    },
    /**
     * Resets the main form
     */
    resetForm: function(){
        this.email.clear();
        this.password.clear();
    },
    /**
     * Go to login page
     */
    go: function() {
        browser.driver.get( variables.ADMIN_PATH + this.stateUrl);
        browser.ignoreSynchronization = true;
        browser.waitForAngular();
        browser.sleep(2000);
    }

};
