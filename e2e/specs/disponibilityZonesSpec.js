var loginPage = require('../pages/loginPage.js');
var disponibilitiesPage = require('../pages/disponibilitiesPage.js');
var variables = require('../helpers/variables.js');

describe('Administrate zones', function () {

  it('Should prevent the navigation if there is not an auth user', function () {
    loginPage.go();
    disponibilitiesPage.go();
    expect(browser.getCurrentUrl()).toBe(variables.ADMIN_PATH + loginPage.stateUrl);
  }, variables.MAX_SAFE_TIMEOUT);

  it('Should navigate to the disponiblities page after login an user', function(){
    loginPage.login();
    disponibilitiesPage.go();
    expect(browser.getCurrentUrl()).toBe(variables.ADMIN_PATH + disponibilitiesPage.stateUrl);
  });

  it('Should select the zones tab and the table must have rows', function(){
    // Wait for the zones API
    browser.sleep(variables.SLEEP_TIME);
    disponibilitiesPage.zonesTab.selectTab();
    expect(disponibilitiesPage.zonesTab.zones.count()).toBeGreaterThan(1);
  });

  it('Should toggle Correctly one of the zones', function(){
    disponibilitiesPage.zonesTab.zones.first().element(by.model('zone.status')).click();
    browser.sleep(variables.SLEEP_TIME);
    expect(['Zona activada!', 'Zona desactivada!']).toContain(disponibilitiesPage.toast.getText());
    disponibilitiesPage.zonesTab.zones.first().element(by.model('zone.status')).click();
    browser.sleep(variables.SLEEP_TIME);
    expect(['Zona activada!', 'Zona desactivada!']).toContain(disponibilitiesPage.toast.getText());
  });

  it('should create a new Zone', function(){
    disponibilitiesPage.zonesTab.createZoneBtn.click();
    browser.sleep(variables.SLEEP_TIME);
    // Open and close modal
    expect(disponibilitiesPage.zonesTab.createZoneModal.isPresent()).toBe(true);
    disponibilitiesPage.zonesTab.cancelBtn.click();
    browser.sleep(500);
    disponibilitiesPage.zonesTab.createZoneBtn.click();
    browser.sleep(200);
    // Create button must be disabled if the polygon is not present
    expect(disponibilitiesPage.zonesTab.createBtn.getAttribute('disabled')).toEqual('true');
    // Draw an small triangle polygon
    browser.sleep(200);
    browser.actions().mouseMove(disponibilitiesPage.zonesTab.mapCanvas, {x: 100, y: 110}).click().perform();
    browser.sleep(200);
    browser.actions().mouseMove(disponibilitiesPage.zonesTab.mapCanvas, {x: 150, y: 120}).click().perform();
    browser.sleep(200);
    browser.actions().mouseMove(disponibilitiesPage.zonesTab.mapCanvas, {x: 156, y: 190}).click().perform();
    browser.sleep(200);
    browser.actions().mouseMove(disponibilitiesPage.zonesTab.mapCanvas, {x: 100, y: 110}).click().perform();
    // Triangle created, add the form data and send
    disponibilitiesPage.zonesTab.createName.sendKeys('Esta es una zona de pruebas desde protractor');
    expect(disponibilitiesPage.zonesTab.createBtn.getAttribute('disabled')).toEqual(null);
    browser.sleep(500);
    // Create the zone
    disponibilitiesPage.zonesTab.createBtn.click();
    browser.sleep(variables.SLEEP_TIME);
    // Toast text must show
    expect(disponibilitiesPage.toast.getText()).toEqual(disponibilitiesPage.zonesTab.createSuccessText);
    browser.sleep(variables.SLEEP_TIME);
    // The modal must be closed
    expect(disponibilitiesPage.zonesTab.createZoneModal.isPresent()).toBe(false);
    // The new zone should appear on the screen
    // Wait for the get zones call to finish
    browser.sleep(variables.SLEEP_TIME);
  });

});

