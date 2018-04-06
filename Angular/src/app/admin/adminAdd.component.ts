import { Location } from '@angular/common';
import { AdminService } from './Adminservice.component';
import { AuthenticateService } from './../authenticate/authenticate.service';
import { Component, OnInit } from '@angular/core';
import{MatInputModule} from '@angular/material'
import { Params } from '@angular/router/src/shared';

@Component({
  selector: 'adminAdd',
  templateUrl: './adminAdd.component.html',
  
})

export class AdminAdd {

    hosts: String[];
    failureGetHost:boolean=false;
    i: number;
    hostsNameValuePair: any;
    temp: string;

    constructor(private _adminService:AdminService, private _authenticateService:AuthenticateService, private host:Location, private location:Location) {
        this._authenticateService.getHostUser().subscribe(res=> {
            this.hostsNameValuePair = res;
            console.log('hostvalue pair:::',this.hostsNameValuePair)
        },
        error => {
          this.failureGetHost=true;
          console.log('adminAdd.component After subscribe error:', error);
        });
    }

    newEvent={
        eventId:'',
        eventName:''
    }

    submit(f){
       this._adminService.AddEvent(f.value).subscribe(res=>{console.log('rs from service',res)});
       console.log(f.value);
       this.location.back();
   }



  
  

}