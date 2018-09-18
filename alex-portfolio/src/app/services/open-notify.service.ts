import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenNotifyService {

  constructor(private http: HttpClient) { }

  getPeopleInSpace(){
    return this.http.get('http://api.open-notify.org/astros.json')
  }

  getIssNow(){
    return this.http.get('http://api.open-notify.org/iss-now.json')
  }

}
