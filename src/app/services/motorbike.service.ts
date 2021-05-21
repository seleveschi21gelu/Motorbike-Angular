import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MotorbikeService {

  constructor(private http:HttpClient) { }

  getMotorbikes(){
    return this.http.get('/server/api/motorbikes')
  }

  getMotorbike(id:number){
    return this.http.get('/server/api/motorbikes/'+id)

  }

  createMotorbikeRegistration(motorbike: any){
    let body = JSON.stringify(motorbike);
    return this.http.post('/server/api/motorbikes',body,httpOptions)

  }

}
