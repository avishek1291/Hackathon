
import { AuthenticateService } from './../authenticate/authenticate.service';
import { AdminService } from './../admin/Adminservice.component';
import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Http ,Response} from '@angular/http';
const URL = 'http://localhost:3000/SubmitIdea/Rockers';
@Component({
  selector: 'app-participant',
  templateUrl: './viewEvent.component.html',
  styleUrls: ['./participant.component.css']
})

export class ViewEventComponent implements OnInit {
Id:any;
EventObj:any
emailobj:any;
hasName:boolean
showform:boolean=false;
value:any;
teamName:string;
filesToUpload: Array<File> = [];
Rating:Number=0;
Winner:String;
  constructor(private adminService:AdminService,private route:ActivatedRoute ,private authservice:AuthenticateService,private http: Http, private el: ElementRef) { }

  ngOnInit() {
 
    this.route.params.forEach((params: Params) => {
        this.Id = params['_eventId'];
        console.log('this is name passed',this.Id);
       this.adminService.getEventbyId(this.Id).subscribe(res=>{
         this.EventObj=res;
         for(var obj of this.EventObj.TeamList){
           console.log(obj.Rating,'this is rating')
           if(this.Rating<obj.Rating){
             this.Rating=obj.Rating;
             this.Winner=obj.TeamName;
           }
         }
       })
    });
//this.adminService.checkParticipant(this.Id,)
this.emailobj=this.authservice.Showloggedin();
console.log('nameobj::::',this.emailobj['Emailid'])

this.adminService.checkParticipant(this.Id,this.emailobj['Emailid']).subscribe(res=>{
  console.log('in view init',res)
  if(res!=undefined||null){
console.log('teamName::::',res)
this.teamName=res.TeamName;
   this.hasName=true;   
  }
  else{
    this.hasName=false;
  }
  console.log('this is hasName',this.hasName);
})

  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
  }

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);

    for(let i =0; i < files.length; i++) {
      formData.append("uploads[]", files[i], files[i]['name']);
    }
  
    console.log('form data variable :   '+ formData.toString());
    this.http.post('http://localhost:3000/SubmitIdea/'+this.Id+'/'+this.teamName, formData)
    .map(res => res.json())
    .subscribe(res => console.log('Upload response: ', res))
  }

  StartChallenge() {
    this.showform=true;
  }

}