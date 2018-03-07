import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MediaProvider} from "../../providers/media/media";
import {HttpErrorResponse} from "@angular/common/http";
import {HomePage} from "../home/home";

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
export class LoginPage implements OnInit {

  ngOnInit(): void {
    if (localStorage.getItem('token') !== null) {
      this.mediaProvider.getUserData().subscribe(response => {
        console.log('Welcome ' + response['full_name']);
      }, (error: HttpErrorResponse) => {
        console.log(error);
        this.navCtrl.push(HomePage, null);
      });
    }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public mediaProvider: MediaProvider) {
  }
}

