import { AdminService } from './Adminservice.component';
import { AuthenticateService } from './../authenticate/authenticate.service';
import { Component, OnInit } from '@angular/core';
import{MatCardModule} from    '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'adminUpdate',
  templateUrl: './adminUpdate.component.html',
  
})
export class AdminUpdate {
    constructor(private route: ActivatedRoute, private router: Router,private _location:Location,private adminService:AdminService, private _authenticateService:AuthenticateService){}
    id:number;
    updatedEvent:any;
    EventObj:any;
    hostsNameValuePair: any;
    failureGetHost:boolean=false;

    ngOnInit(){
        this.route.params.forEach((params: Params) => {
        this.id = params['_id'];
        console.log('this is id passed',this.id);
        this.adminService.getEventbyId(this.id).subscribe(res=>{
            this.EventObj=res;
        })
    });
    
    this._authenticateService.getHostUser().subscribe(res=> {
        this.hostsNameValuePair = res;
        console.log('hostvalue pair:::',this.hostsNameValuePair)
    },
    error => {
      this.failureGetHost=true;
      console.log('adminAdd.component After subscribe error:', error);
    });

}

Update(f){
      console.log('updated value',f.value)
      this.adminService.Updatebyid(this.id,f.value).subscribe(res=>{

        console.log('this is updated event',res)
        this._location.back();
      })
}
}