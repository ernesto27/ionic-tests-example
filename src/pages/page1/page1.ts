import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import Store from '../../store';
import string from '../../strings';
import { DetailItemPage } from '../detail-item/detail-item';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  items: object[];
  noItemsMessage: string;

  constructor(public navCtrl: NavController) {
    
    let store = new Store();
    store.addItem({
      title: 'title1',
      'body': 'body1'
    });
    store.addItem({
      'title': 'title2',
      'body': 'body2'
    });
    store.addItem({
      'title': 'title3',
      'body': 'body3'
    });

    this.items = store.getItems();

    this.noItemsMessage = string.noItemsMessage;
  }


  openDetails(){
    this.navCtrl.push(DetailItemPage);
  }

}













