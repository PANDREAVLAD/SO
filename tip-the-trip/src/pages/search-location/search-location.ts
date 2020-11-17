import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-search-location',
  templateUrl: 'search-location.html'
})

export class SearchLocationPage {
  public fromto: any;
  public places = {
    nearby: [
      {
        id: 1,
        name: "Brasov"
      },
      {
        id: 2,
        name: "Bucuresti"
      },
      {
        id: 3,
        name: "Cluj Napoca"
      },
      {
        id: 4,
        name: "Iasi"
      },
      {
        id: 5,
        name: "Timisoara"
      }
    ]
  };

  constructor(private storage: Storage, public nav: NavController, public navParams: NavParams) {
    this.fromto = this.navParams.data;
  }

  // search by item
  searchBy(item) {
    if (this.fromto === 'from') {
      this.storage.set('pickup', item.name);
    }
    if (this.fromto === 'to') {
      this.storage.set('dropOff', item.name);
    }
    this.nav.pop();
  }
}
