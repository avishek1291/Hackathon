import { Component, OnInit } from '@angular/core';
//import{RegisterService} from './registration.service.component';
import { AuthenticateService } from './authenticate.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import{Location} from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  showProfile:boolean=false;
  successUserRegistration: boolean=false;
  failureUserRegistration: boolean=false;
  err: any;
  errorMessage: any;
  hasUser:boolean=false
  constructor(private _authenticateService:AuthenticateService ,private location:Location,private router:Router) { }

  ngOnInit() {
  }

  Register(value) {
    console.log('this is value',value)
    this.successUserRegistration = false;  
    this.failureUserRegistration = false;
    this._authenticateService.addUser(value).subscribe(res=>{
      console.log(res,'this is response');
      this.successUserRegistration = true;  
      this.showProfile=true;
//    this.location.back();
    },
    error => {
      console.log('error: ', error);
//      this.err = error._body.message;
      this.failureUserRegistration = true;
      if (error._body != null) {
        this.errorMessage = error._body;
      }
      else {
        this.errorMessage = 'Registration failure - Internal server error!';
      }
    });
  }
  
  goBack(): void {
    this.location.back();
  } 
checkUser(email){
this._authenticateService.getUsers(email).subscribe(res=>{
  if(res!=null){
    console.log('inside check user if',res)
    this.errorMessage = 'Registration failure - User Exists!';
    this.hasUser=true;
    this.failureUserRegistration=true;
  }
  else{ 
    this.hasUser=false;
    this.failureUserRegistration=false;
  }
})
console.log('on change of email:::', email)
}
}