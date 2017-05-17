'use strict';

var variables = require('../helpers/variables.js');

module.exports = {
    email :         element(by.model('vm.email')),
    password :      element(by.model('vm.password')),
    loginBtn:       element(by.css('[ng-click="vm.login()"]')),
    errorToast:     element(by.css('md-toast span')),
    errorToastText: 'Usuario o contraseña incorrectos',
    userEmail:      's.polanco@mensajerosurbanos.com',
    userPass:       '1qazxsw2',

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
        browser.driver.get( variables.ADMIN_PATH + 'login');
        browser.ignoreSynchronization = true;
        browser.waitForAngular();
        browser.sleep(2000);
    }

};
