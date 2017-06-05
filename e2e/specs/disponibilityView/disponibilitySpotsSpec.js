var loginPage = require('../../pages/loginPage.js');
var disponibilitiesPage = require('../../pages/disponibilitiesPage.js');
var variables = require('../../helpers/variables.js');

describe('Administrate spots', function () {

  it('Should select the spots tab and the table must have rows', function () {
    // Wait for the spots API
    browser.sleep(variables.SLEEP_TIME);
    disponibilitiesPage.spotsTab.selectTab();
    expect(disponibilitiesPage.spotsTab.spots.count()).toBeGreaterThan(1);
  });

  it('Should toggle Correctly one of the spots', function () {
    disponibilitiesPage.spotsTab.spots.first().element(by.model('spot.status')).click();
    browser.sleep(variables.SLEEP_TIME);
    expect(['Punto activado!', 'Punto desactivado!']).toContain(disponibilitiesPage.toast.getText());
    disponibilitiesPage.spotsTab.spots.first().element(by.model('spot.status')).click();
    browser.sleep(variables.SLEEP_TIME);
    expect(['Punto activado!', 'Punto desactivado!']).toContain(disponibilitiesPage.toast.getText());
  });

  it('should create a new Spot', function () {
    disponibilitiesPage.spotsTab.createSpotBtn.click();
    browser.sleep(variables.SLEEP_TIME);
    // Open and close modal
    expect(disponibilitiesPage.spotsTab.createSpotModal.dialog.isPresent()).toBe(true);
    disponibilitiesPage.spotsTab.createSpotModal.cancelBtn.click();
    browser.sleep(500);
    disponibilitiesPage.spotsTab.createSpotBtn.click();
    browser.sleep(200);
    // Create button must be disabled if the form in empty
    expect(disponibilitiesPage.spotsTab.createSpotModal.createBtn.getAttribute('disabled')).toEqual('true');
    // Send keys to the form
    disponibilitiesPage.spotsTab.createSpotModal.name.sendKeys('Punto de prueba protractor');
    disponibilitiesPage.spotsTab.createSpotModal.address.sendKeys('Carrera 7');
        // Select the first item of the company autocomplete
    disponibilitiesPage.spotsTab.createSpotModal.company.sendKeys('as');
    browser.sleep(variables.SLEEP_TIME);
    disponibilitiesPage.spotsTab.createSpotModal.companySuggestions.first().click();
    disponibilitiesPage.spotsTab.createSpotModal.phone.sendKeys('1111111');
    disponibilitiesPage.spotsTab.createSpotModal.clientID.sendKeys('2222');
    disponibilitiesPage.spotsTab.createSpotModal.schedule.sendKeys('Lunes a viernes 24 horas');
    disponibilitiesPage.spotsTab.createSpotModal.parking.sendKeys('1000');
    disponibilitiesPage.spotsTab.createSpotModal.createBtn.click();
    browser.sleep(variables.SLEEP_TIME);
    // Toast text must show
    expect(disponibilitiesPage.toast.getText()).toEqual('Punto creado');
    browser.sleep(variables.SLEEP_TIME);
    // The modal must be closed
    expect(disponibilitiesPage.spotsTab.createSpotModal.dialog.isPresent()).toBe(false);
    browser.sleep(variables.SLEEP_TIME);
  });

});

