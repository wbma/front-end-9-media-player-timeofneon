import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {User} from "../../interfaces/user";
import {MediaProvider} from "../../providers/media/media";
import {HttpErrorResponse} from "@angular/common/http";
import {HomePage} from "../home/home";

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

  constructor(public navCtrl: NavController, private mediaProvider: MediaProvider) {
  }

  register() {
    this.mediaProvider.register(this.user).subscribe(response => {
      console.log('registered');
      this.mediaProvider.login(this.user).subscribe(data => {
        this.navCtrl.setRoot(HomePage);
        this.mediaProvider.logged = true;
      });
    }, (error: HttpErrorResponse) => {
      alert(error.error.message);
    });
  }
}
