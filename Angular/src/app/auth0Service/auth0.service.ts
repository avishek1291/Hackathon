import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';  
import * as firebase from 'firebase';
@Injectable()
export class Auth0Service {
  socialuser:firebase.User;
 constructor(private afuth:AngularFireAuth ,private route:ActivatedRoute){
  
 }

 signInWithGoogle(){
  let returnUrl= this.route.snapshot.queryParamMap.get('returnUrl');
   localStorage.setItem('returnUrl',returnUrl);
   
  return this.afuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

  
  }
 
  getUser(){
   return this.afuth.authState;
  }
}