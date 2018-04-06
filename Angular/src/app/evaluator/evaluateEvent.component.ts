import { AdminUpdate } from './../admin/adminUpdate.component';
import { Component, OnInit,Input } from '@angular/core';
import {MatExpansionPanel} from '@angular/material'
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common'
import{FileUploader,FileSelectDirective} from 'ng2-file-upload';

import { AdminService } from './../admin/Adminservice.component';
import { EvaluateService } from './evaluate.service';
import { AuthenticateService } from './../authenticate/authenticate.service';

@Component({
  selector: 'hostconfigure',
  templateUrl: './evaluateEvent.component.html',
  styleUrls: ['./evaluate.component.css']
})

export class EvaluateEventComponent {
  id:Number;
  EventObj:any;
  host: any;
  Teams:any;
  Participants:any;
  successRatingUpdate:boolean=false;
  failureRatingUpdate:boolean=false;
  ratings: Number[] = [0,1,2,3,4,5,6,7,8,9,10];

//  this._authenticateService.getUsers(formValue.user).subscribe(res=> { 
//    this.users=res; 
//    console.log("In subscribe", this.users);


  constructor(private route: ActivatedRoute,private router: Router,private rating:Location,private evaluateService:EvaluateService,private adminService:AdminService, private authenticateService:AuthenticateService) {  
    this.route.params.forEach((params: Params) => {
      this.id = params['_id'];
      console.log('Evaluate Event Id: ',this.id);
      this.adminService.getEventbyId(this.id).subscribe(res=> {
        this.EventObj=res;
        this.Teams=this.EventObj.TeamList;
        console.log("evaluateEvent.component After subscribe: ", this.Teams);

        this.authenticateService.getUsers(this.EventObj.HostName).subscribe(res=> {
          this.host=res;
          console.log("evaluateEvent.component After subscribe Host: ", this.host);
        })
  
      })

    });
  }

  ngOnInit() {
  }

  SubmitRating(teamIndex,teamWithRating) {

    teamWithRating.Rating = (Number(teamWithRating.UXRating) + Number(teamWithRating.FunctionRating))/2;

    console.log('Rated Team details: ', teamWithRating,' i: ', teamIndex);
//    this.EventObj.TeamList[teamIndex].Rating = teamWithRating.Rating;
    console.log("evaluateEvent.component After rating: ", this.EventObj);
    this.successRatingUpdate=false;
    this.failureRatingUpdate=false;
    this.adminService.Updatebyid(this.id,this.EventObj).subscribe(res=>{
      console.log('evaluateEvent.component After patch success: ', res);
      this.successRatingUpdate = true;
    },
    error => {
      this.failureRatingUpdate=true;
      console.log('evaluateEvent.component After patch error:', error);
    }
  );
  }

  FileDownload(fileName) {

    console.log('Inside file download...');
    console.log('FileName: ', fileName);
  //  return this.http.get('http://localhost:3000/fileDownload/kochinscratchpad.txt',{responseType: })
       this.evaluateService.getFile(this.id,fileName);
  }

}