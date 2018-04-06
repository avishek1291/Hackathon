import { User } from './../authenticate/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { Auth0Service } from './../auth0Service/auth0.service';
import { UserModel } from './User';

import { AuthenticateService } from './../authenticate/authenticate.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent  {
public CurrentUser:UserModel
User:any;
GoogleUser:firebase.User

constructor(private authservice:AuthenticateService ,private router:Router,private afauth:AngularFireAuth ) {
   this.User=this.authservice.Showloggedin();
   this.afauth.authState.subscribe(res=>{
    console.log('this is firebase response',res)
	this.GoogleUser=res;
	console.log('this is google user',this.GoogleUser)

	if(this.GoogleUser) {
		console.log('inside if of google user')
		this.CurrentUser=new UserModel();
		this.CurrentUser.FirstName=this.GoogleUser.displayName.split(" ")[0];
		this.CurrentUser.LastName=this.GoogleUser.displayName.split(" ")[1];
		this.CurrentUser.Emailid=this.GoogleUser.email;
		this.CurrentUser.Contact=this.GoogleUser.phoneNumber;
		this.authservice.StoreUser(this.CurrentUser);
	}
	console.log('In Subscribe, this is CurrentUser',this.CurrentUser)
   })
 
   if(this.User) {
	this.CurrentUser=this.User
    
   }
   console.log('Logged User, this is CurrentUser',this.CurrentUser)

}

ngOnInit() {
	}

LogOut() {
	window.localStorage.removeItem('CurrentUser');
	this.router.navigateByUrl("");
	this.afauth.auth.signOut();
	console.log('log out done')
	}

}