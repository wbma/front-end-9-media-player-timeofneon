import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, ViewChild} from '@angular/core';
import {Nav} from "ionic-angular";
import {MediaInt} from "../../interfaces/mediaInt";

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {

  @ViewChild(Nav) nav: Nav;

  logged = false;
  media: MediaInt = {
    title: '',
    description: '',
  };

  apiUrl = 'http://media.mw.metropolia.fi/wbma';

  constructor(private http: HttpClient) {
  }

  login(user) {
    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    return this.http.post(this.apiUrl + '/login', user, settings);
  }

  register(user) {
    return this.http.post(this.apiUrl + '/users', user);
  }

  public upload(formData, token) {
    const settings = {
      headers: new HttpHeaders().set('x-access-token', token),
    };
    return this.http.post(this.apiUrl + '/media', formData, settings);
  }

  public getUserData() {
    const settings = {
      headers: new HttpHeaders().set('x-access-token', localStorage.getItem('token'))
    };
    console.log('we try to upload now');
    return this.http.get(this.apiUrl + '/users/user', settings);
  }

  getNewFiles() {
    const settings = {
      headers: new HttpHeaders().set('x-access-token',
        localStorage.getItem('token')),
    };
    return this.http.get(this.apiUrl + '/media', settings);
  }

  getMediaFiles(start: number, amount: number) {
    return this.http.get(this.apiUrl + '/media?start=' + start + '&limit=' + amount);
  }

}
