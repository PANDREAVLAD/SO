import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";


export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard
  ){
    this.initializeApp();

    this.appMenuItems = [
      {title: 'Acasa', component: HomePage, icon: 'home'},
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }

}