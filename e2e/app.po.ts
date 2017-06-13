import { browser, by, element } from 'protractor';

export class CfnaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sr-root h1')).getText();
  }
}
