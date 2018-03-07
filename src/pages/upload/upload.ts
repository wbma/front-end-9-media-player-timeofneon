import {Component, OnInit, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MediaProvider} from "../../providers/media/media";
import {MediaInt} from "../../interfaces/mediaInt";

/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage implements OnInit{

  fm: FormData = new FormData();
  file: File;
  media: MediaInt = {
    title: '',
    description: '',
  };
  ngOnInit(): void {

  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public mediaProvider: MediaProvider) {
  }

  setFile(evt) {
    console.log(evt.target.files[0]);
    this.file = evt.target.files[0];
  }

  startUpload() {
    this.fm.append('file', this.file);
    this.fm.append('title', this.media.title);
    this.fm.append('description', this.media.description);
    this.mediaProvider.uploadFormData(this.fm).subscribe(response => {
      console.log(response);
    });
  }

}
