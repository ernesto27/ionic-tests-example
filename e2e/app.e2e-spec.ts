import { Page } from './app.po';
import { element, by } from 'protractor';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should have a title saying Page One', () => {
      page.getTitle().then(title => {
        expect(title).toEqual('Todo list');
      });
    });

    it('should show a list of todo items', () => {
      expect(element(by.className('list list-md')).isPresent()).toBeTruthy();
    });

    // it('should show a message if no items are saved', () => {
    //   element(by.id('message')).getText().then(function(text){
    //     expect(text).toEqual('No error message');
    //   })
    // });

    
    it('should open a detail page if item is clicked', () => {
      element(by.id('open')).click();

      page.refresh();
      page.getTitle().then(title => {
        expect(title).toEqual('Details page');
      });
    });





  })
});