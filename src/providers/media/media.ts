import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable, ViewChild} from '@angular/core';
import {Nav, NavController} from "ionic-angular";
import {HomePage} from "../../pages/home/home";

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {

  @ViewChild(Nav) nav: Nav;

  username: string;
  password: string;
  status: string;
  test = 'testing';

  apiUrl = 'http://media.mw.metropolia.fi/wbma';

  constructor(private http: HttpClient) {
  }

  public login() {
    const body = {
      username: this.username,
      password: this.password,
    };

    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    this.http.post(this.apiUrl + '/login', body, settings).subscribe(response => {
      console.log(response['token']);
      localStorage.setItem('token', response['token']);
      this.nav.push(HomePage);
    }, (error: HttpErrorResponse) => {
      this.status = error.statusText;
    });
  }

  public register(user) {
    return this.http.post(this.apiUrl + '/users', user);
  }

  public uploadFormData(formData) {
    const settings = {
      headers: new HttpHeaders().set('x-access-token', localStorage.getItem('token'))
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
