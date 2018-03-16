import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MediaProvider} from "../../providers/media/media";
import {HttpErrorResponse} from "@angular/common/http";
import {HomePage} from "../home/home";
import {User} from "../../interfaces/user";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: User = {
    password: '',
    username: '',
    email: ''
  };

  status: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public mediaProvider: MediaProvider) {
  }

  login() {
    this.mediaProvider.login(this.user).subscribe(response => {
      localStorage.setItem('token', response['token']);
      this.navCtrl.setRoot(HomePage);
      this.mediaProvider.logged = true;
    }, (error: HttpErrorResponse) => {
      console.log(error.error);
      this.status = error.error.message;
    });
  }
}
