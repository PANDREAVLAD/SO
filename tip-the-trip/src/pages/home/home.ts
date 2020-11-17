import {Component} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
import {Storage} from '@ionic/storage';
import {TripsPage} from "../trips/trips";
import {SearchLocationPage} from "../search-location/search-location";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  // search condition
  public search = {
    name: "Brasov",
  }

  constructor(private storage: Storage, public nav: NavController, public popoverCtrl: PopoverController) {
  }

  ionViewWillEnter() {

    this.storage.get('pickup').then((val) => {
      if (val === null) {
        this.search.name = "Brasov"
      } else {
        this.search.name = val;
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  // go to result page
  doSearch() {
    this.nav.push(TripsPage);
  }

  // choose place
  choosePlace(from) {
    this.nav.push(SearchLocationPage, from);
  }
}
