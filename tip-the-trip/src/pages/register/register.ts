import {Component} from "@angular/core";
import {NavController, ToastController} from "ionic-angular";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public nav: NavController, public toastCtrl: ToastController) {
  }

  register() {
    this.nav.setRoot(LoginPage);
    let toast = this.toastCtrl.create({
      message: 'Contul a fost creat. Verificati adresa de email.',
      duration: 2500,
      position: 'top',
      cssClass: 'dark-trans',
      closeButtonText: 'OK',
      showCloseButton: true
    });
    toast.present();
  }

  login() {
    this.nav.setRoot(LoginPage);
  }
}

