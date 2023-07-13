import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataDTO } from '../models/dataDTO';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GooglemapsService {

  apiUrl = 'https://back.rail-travel-project.com/'; //https://34.147.140.133/
  constructor(public http: HttpClient) { }

  storeData(data: DataDTO): Observable<any> {
    return this.http.post(environment.apiUrl + 'data', data);
  }
  start(data: any): Observable<any> {
    return this.http.post( this.apiUrl + 'User/startTrack', data);
  } 
  stop(data: any): Observable<any> {
    return this.http.post( this.apiUrl + 'User/endTrack', data, {responseType: 'text'});
  } 
}
