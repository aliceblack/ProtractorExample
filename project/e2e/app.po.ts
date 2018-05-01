import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getTitle() {
    return browser.getTitle();
  }

  calculate(n1,n2){
    element(by.id('input1')).sendKeys(n1);
    element(by.id('input2')).sendKeys(n2);
    element(by.id('calculatorButton')).click();
  }

  getFirstInput(){
    return element(by.id('input1')).getAttribute('value');
  }

  getSecondInput(){
    return element(by.id('input2')).getAttribute('value');
  }

  getTotal(){
    return element(by.id('calculatorTotal')).getText();
  }
}
