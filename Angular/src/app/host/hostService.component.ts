import {Injectable} from '@angular/core';
//import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
@Injectable()
export class HostService{
count:number=0;
result :any='';

private _deleteurl="http://localhost:3000/deleteEvent/";
private _EventbyHost="http://localhost:3000/getEvents/";
private _UpdatebyId="http://localhost:3000/updateEvent/";
 constructor(private _http:Http) {
  
  }
 
getEventbyHost(hostname){
  console.log('in get event by id');
  console.log(this._EventbyHost+hostname);
  return this._http.get(this._EventbyHost+hostname).map(res=>res.json());
}

DeleteEvent(id){
  console.log('in delete event service',id)
  return this._http.delete(this._deleteurl+id).map(res=>res.json());
}






}
