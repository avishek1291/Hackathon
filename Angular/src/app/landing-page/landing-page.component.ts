import { Router } from '@angular/router';
import { Auth0Service } from './../auth0Service/auth0.service';
import { Component, OnInit } from '@angular/core';
import { FUNCTION_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private auth0:Auth0Service,private router:Router) { }

  ngOnInit() {
  }
login(){
this.auth0.signInWithGoogle().then(function(){
  window.location.assign('/Home')
}
  
)
}
}
