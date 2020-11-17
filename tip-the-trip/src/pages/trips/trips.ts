import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {TripDetailPage} from "../trip-detail/trip-detail";

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})

export class TripsPage {
  public trips: any;
  constructor(public nav: NavController, public tripService: TripService) {
    // set sample data
    this.trips = tripService.getAll();
  }
  viewDetail(id) {
    this.nav.push(TripDetailPage, {id: id});
  }
}
