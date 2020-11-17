import {Component} from "@angular/core";
import {NavController,ToastController} from "ionic-angular";
import {TripService} from "../../services/trip-service";


@Component({
  selector: 'page-trip-detail',
  templateUrl: 'trip-detail.html'
})

export class TripDetailPage {
  public trip: any;
  constructor(public nav: NavController, public tripService: TripService, public toastCtrl: ToastController) {
    this.trip = tripService.getItem(1);
  }
}


