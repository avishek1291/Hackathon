

import { AuthenticateService } from './../authenticate/authenticate.service';

import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthguardService implements CanActivate {
userpresent:boolean=false;
  constructor(private authservice:AuthenticateService,private route:Router) { }

canActivate(route,state:RouterStateSnapshot){
  console.log('show login ',this.authservice.Showloggedin())
  console.log('show login ',typeof this.authservice.Showloggedin())
  window.localStorage.setItem('state',state.url)
 if(this.authservice.Showloggedin()){
this.userpresent=true;
 }
    

  console.log('this is userperesent',this.userpresent);
  if(this.userpresent){
    console.log('inside if')
   // console.log('user ',this.userpresent.displayName)
  // this.route.navigateByUrl('/Home');
  //var stateurl=window.localStorage.getItem('state')
 //this.route.navigate(stateurl);
    return true;
    
  }
 else if(!this.userpresent){
  console.log('user ',this.userpresent)
  this.route.navigate([''],{queryParams:{returnUrl:state.url}});
  return false;
 }



}
}
