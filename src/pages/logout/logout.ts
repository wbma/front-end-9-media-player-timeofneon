import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {MediaProvider} from "../../providers/media/media";

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, private mediaProvider: MediaProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
    localStorage.removeItem('token');
    this.mediaProvider.logged = false;
    this.navCtrl.setRoot(HomePage);
  }
}
