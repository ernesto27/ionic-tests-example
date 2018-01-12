import { browser } from 'protractor';

export class Page {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  refresh(){
    return browser.driver.sleep(500);
    
  }
  
}
