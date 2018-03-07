import {Component, OnInit, ViewChild} from '@angular/core';
import { NavController} from 'ionic-angular';
import {MediaProvider} from "../../providers/media/media";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage implements OnInit{

  @ViewChild('myNav') nav: NavController;

  printOut: string;
  mediaFiles: any;

  ngOnInit(): void {
    /* if (localStorage.getItem('token') !== null) {
      this.mediaService.getUserData().subscribe(response => {
        console.log('Welcome ' + response['full_name']);
      }, (error: HttpErrorResponse) => {
        console.log(error);
        this.router.navigate(['login']);
      });
    } else {
      this.router.navigate(['login']);
    } */

    this.printOut = this.mediaProvider.test;

    this.mediaProvider.getMediaFiles(0, 10).subscribe(result => {
      this.mediaFiles = result;
    }, err => {
      console.log(err);
    });
  }

  constructor(public navCtrl: NavController, public mediaProvider: MediaProvider) {
  }

}

