
import { AdminService } from './../admin/Adminservice.component';
import { HostService } from './hostService.component';
import { Component, OnInit,Input } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'hostconfigure',
  templateUrl: './preview.component.html',
  styleUrls: ['./host.component.css']
})
export class Preview {
Id:Number;
EventObj:any;

  constructor(private route: ActivatedRoute, private router: Router,private _location:Location,private hostservice:HostService,private adminService:AdminService){
    this.route.params.forEach((params: Params) => {
      this.Id = params['_id'];
      console.log('this is name passed',this.Id);
     this.adminService.getEventbyId(this.Id).subscribe(res=>{
       this.EventObj=res;
     })
  });
  }

  ngOnInit() {
   
    
  
}


}
