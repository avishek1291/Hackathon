import { Component, OnInit } from '@angular/core';
import{MatCardModule} from    '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common'

import { EvaluateService } from './evaluate.service';
import { AuthenticateService } from './../authenticate/authenticate.service';

@Component({
  selector: 'app-host',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.css']
})

export class EvaluateComponent {

constructor(private route: ActivatedRoute, private router: Router,private _location:Location,private evaluateservice:EvaluateService, private authenticateService:AuthenticateService){}
  evaluatorName:any;
  evaluateEvents:any; 
  host: any;

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.evaluatorName= params['evaluatorname']; 
      console.log('evaluatorName passed',this.evaluatorName);
      this.evaluateservice.getEventbyEvaluator(this.evaluatorName).subscribe(res=>{
        this.evaluateEvents=res;
        console.log('evaluateEvents data',this.evaluateEvents);

/*        this.authenticateService.getUsers(this.evaluateEvents[0].HostName).subscribe(res=> {
          this.host=res;
          console.log("evaluateEvent.component After subscribe Host: ", this.host);
        })   */


      }); 
  })
}

remove(id){
/*  this.hostservice.DeleteEvent(id).subscribe(res=>{
console.log('event deletdd by host'+res);
  }) */
}

ConfigureEvent(id,EventObj){

}

}
