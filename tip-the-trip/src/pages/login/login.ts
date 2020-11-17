import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {HomePage} from "../home/home";
import {RegisterPage} from "../register/register";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController) {
    this.menu.swipeEnable(false);
  }

  register() {
    this.nav.setRoot(RegisterPage);
  }


  login() {
    this.nav.setRoot(HomePage);
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Ati uitat parola?',
      message: "Introduceti adresa de email pentru a va trimite un link de resetare parola.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Adresa de email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Anulati',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Trimiteti',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Mesaj trimis cu succes. Verificati adresa de email.',
              duration: 2500,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
