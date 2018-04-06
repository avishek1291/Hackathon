import { UserModel } from './../navbar/User';
import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { CookieService } from 'ngx-cookie-service';
import { Observer, Subject } from 'rxjs';
@Injectable()

export class AuthenticateService {    
  private _usersUrl = "http://localhost:3000/user/emailid/";
  private _hostUserUrl = "http://localhost:3000/user/host/";
  private _evaluatorUserUrl = "http://localhost:3000/user/evaluator/";
  private _RegisterUrl = "http://localhost:3000/user/adduser";

User:UserModel
public details=new Subject<UserModel>();
  constructor (private _http: Http , private cookieService: CookieService) { }

  getUsers(email) {
    console.log('In Authenticate.service getUsers')
      return this._http.get(this._usersUrl+email)
      .map(response => response.json())
  }

  getHostUser() {
    console.log('In Authenticate.service getHostUser')
      return this._http.get(this._hostUserUrl).map(response => response.json())
  }

  getEvaluatorUser() {
    console.log('In Authenticate.service getEvaluatorUser')
      return this._http.get(this._evaluatorUserUrl).map(response => response.json())
  }

  addUser(formvalue) {
    console.log('In Authenticate.service addUser');
    return this._http.post(this._RegisterUrl,formvalue).map(res=>{res.json()},error=>{error.json()});
  }

  StoreUser(logged){
    this.User=logged;
    window.localStorage.setItem('CurrentUser',JSON.stringify(this.User) )
   // this.cookieService.set('userobj',this.User['emailid']);
  }

  Showloggedin(){
    let results=JSON.parse(window.localStorage.getItem('CurrentUser'));
    console.log('hi!!!!!!!!!!!!!!!',JSON.stringify(results));
    
    return results;
    
   
  }
  

}
