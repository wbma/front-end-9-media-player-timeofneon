import {Component, OnInit, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../interfaces/user";
import {MediaProvider} from "../../providers/media/media";
import {HttpErrorResponse} from "@angular/common/http";

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage implements OnInit{

  user: User = {
    username: '',
    password: '',
    email: ''
  };
  ngOnInit(): void {
    console.log('ionViewDidLoad RegistrationPage');
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private mediaProvider: MediaProvider) {
  }

  register() {
    console.log(this.user);
    this.mediaProvider.register(this.user).subscribe(response => {
      console.log(response);
      this.mediaProvider.username = this.user.username;
      this.mediaProvider.password = this.user.password;
      this.mediaProvider.login();
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
    });
  }
}
