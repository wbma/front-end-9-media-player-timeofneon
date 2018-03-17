import {Component, OnInit, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MediaProvider} from "../../providers/media/media";
import {LogoutPage} from "../logout/logout";
import {MediaPlayerPage} from "../media-player/media-player";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage implements OnInit{

  @ViewChild('myNav') nav: NavController;

  mediaFiles: any;
  user: string;
  fileId: any;

  ngOnInit(): void {
    this.mediaProvider.getMediaFiles(0, 10).subscribe(result => {
      this.mediaFiles = result;
      this.mediaFiles['user_id'] = this.user;
      this.mediaFiles['file_id'] = this.fileId;
    }, err => {
      console.log(err);
    });
  }

  constructor(public navCtrl: NavController, public mediaProvider: MediaProvider) {
  }

  logout() {
    this.navCtrl.setRoot(LogoutPage)
  }

  toPlayer(param1, param2, param3, param4, param5) {
    this.navCtrl.push(MediaPlayerPage, {
      tit: param1,
      descrip: param2,
      img: param3,
      user: param4,
      fileId: param5
    });
  }

}

