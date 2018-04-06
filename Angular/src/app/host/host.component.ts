import { HostService } from './hostService.component';
import { Component, OnInit } from '@angular/core';
import{MatCardModule} from    '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {Location} from '@angular/common'
@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent {

  constructor(private route: ActivatedRoute, private router: Router,private _location:Location,private hostservice:HostService){}
hostName:any;
hostdata=[];
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.hostName= params['hostname'];

      console.log('this is hostName passed',this.hostName);
      this.hostservice.getEventbyHost(this.hostName).subscribe(res=>{
        this.hostdata=res;
        console.log('this is data',this.hostdata)
      })

  })
  
}
removeCard(id,i){
  this.hostdata.splice(i,1);
  this.hostservice.DeleteEvent(id).subscribe(res=>{
console.log('event deletdd by host'+res);
  })
}

ConfigureEvent(id,EventObj){

}

}
