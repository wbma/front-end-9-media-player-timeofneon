import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MediaProvider} from "../../providers/media/media";

/**
 * Generated class for the MediaPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-media-player',
  templateUrl: 'media-player.html',
})
export class MediaPlayerPage {

  title: string;
  description: string;
  image: string;
  user: string;
  fullname: string;
  fileID: any;
  username: string;
  favourites: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public mediaProvider: MediaProvider) {
    this.title = this.navParams.get('tit');
    this.description = this.navParams.get('descrip');
    this.image = this.navParams.get('img');
    this.user = this.navParams.get('user');
    this.fileID = this.navParams.get('fileId');
    this.getUserInformation();
    this.favourites = this.getAmountOfFavourites(this.fileID);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MediaPlayerPage');
  }

  getAmountOfFavourites(file) {
    this.mediaProvider.getAmountOfFavourites(file).subscribe(data => {
      return data.length;
    });
  }

  getUserInformation() {
    this.mediaProvider.getUser(this.user, localStorage.getItem('token')).subscribe(response => {
      this.fullname = response['full_name'];
      this.username = response['username'];
    });
  }

}
