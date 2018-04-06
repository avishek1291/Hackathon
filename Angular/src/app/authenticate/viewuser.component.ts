import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { AuthenticateService } from './authenticate.service';
import { User } from './user';
import "rxjs/add/operator/map";

@Component({
    templateUrl: './viewuser.component.html',
    styleUrls: ['./viewuser.component.css']
})

export class ViewUserComponent implements OnInit {
    emailid: any;
    user: any;

    constructor(private _authenticateService: AuthenticateService, private route: ActivatedRoute,private location:Location) {
        this.route.params.forEach((params: Params) => {
            this.emailid = params['emailid'];
            console.log('this is email',this.emailid);
            console.log("ViewUser.Component Emailid:", this.emailid ); 
            this._authenticateService.getUsers(this.emailid).subscribe(res=>this.user=res,
                err=>console.log('errpr:',err)); 
            }); 
    }

    ngOnInit(): void {
   	   
    }

    goBack(): void {
  this.location.back();
    } 
}