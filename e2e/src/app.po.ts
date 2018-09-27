import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }




  navigateToTest() {
    return browser.get('/test');
  }
  getParagraphTextTest() {
    return element(by.css('app-root h1')).getText();
  }

  navigateToTest2() {
    return browser.get('/test2');
  }
  getParagraphTextTest2() {
    return element(by.css('app-root h1')).getText();
  }

  navigateToTest3() {
    return browser.get('/test3');
  }
  getParagraphTextTest3() {
    return element(by.css('app-root h1')).getText();
  }

  navigateToTest4() {
    return browser.get('/test4');
  }
  getParagraphTextTest4() {
    return element(by.css('app-root h1')).getText();
  }

  getParagraphTextH3() {
    return element(by.css('app-root h3')).getText();
  }
  getParagraphTextClickH4() {
    return element(by.css('app-root h4')).getText();
  }
  getParagraphTextClickedH4() {
    element(by.css('app-root h4')).click();
    return element(by.css('app-root h4')).getText();
  }


  navigateToTestLogin() {
    return browser.get('/login');
  }
  getParagraphTextloginH4() {
    return element(by.css('app-root .login-page')).getText();
  }

}
