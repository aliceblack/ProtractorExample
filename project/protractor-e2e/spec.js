describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://localhost:4200');

    expect(browser.getTitle()).toEqual('E2eProject');
  }, 20000);
});
