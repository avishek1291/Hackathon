import { AuthenticateService } from './../authenticate/authenticate.service';
import { Injectable, OnInit } from '@angular/core';
//import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()

export class EvaluateService{

private _EventbyEvaluator="http://localhost:3000/getEvaluateEvents/";

constructor(private _http:Http) {
}

OnInit() {
this
}

getEventbyEvaluator(evaluatorName) {
  console.log(this._EventbyEvaluator+evaluatorName);
  return this._http.get(this._EventbyEvaluator+evaluatorName).map(res=>res.json());
}

getFile(id, fileName) {
  console.log('Inside service.getFile...');
  console.log('FileName: ', fileName);
  window.open("http://localhost:3000/GetFile/"+id+'/'+fileName,'doc.');
}

}
