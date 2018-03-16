import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MediaProvider} from "../../providers/media/media";
import {HttpErrorResponse} from "@angular/common/http";
import {HomePage} from "../home/home";

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

  file: File;
  title: string;
  description: string;
  ngOnInit(): void {

  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public mediaProvider: MediaProvider) {
  }

  setFile(evt) {
    console.log(evt.target.files[0]);
    this.file = evt.target.files[0];
  }

  startUpload() {

    const formData = new FormData();

    formData.append('title', this.title);
    formData.append('description', this.description);
    formData.append('file', this.file);

    console.log(formData);

    this.mediaProvider.upload(formData, localStorage.getItem('token')).subscribe(response => {
      console.log(response);
      this.navCtrl.setRoot(HomePage);
    }, (error: HttpErrorResponse) => {
      console.log(error.error.errorMessage);
    });
  }

}
