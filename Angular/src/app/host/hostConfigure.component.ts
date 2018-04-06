import { AuthenticateService } from './../authenticate/authenticate.service';

import { AdminService } from './../admin/Adminservice.component';
import { HostService } from './hostService.component';
import { Component, OnInit,Input } from '@angular/core';
import {MatDatepicker} from '@angular/material'
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common'
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'hostconfigure',
  templateUrl: './configure.component.html',
  styleUrls: ['./host.component.css']
})
export class HostConfigure {
id:Number;
EventObj:any;
published:boolean=false;
filesToUpload: Array<File> = [];
formData: any;
files: Array<File>;
EvaluatorNames:any;
  constructor(private route: ActivatedRoute, private router: Router,private _location:Location,private hostservice:HostService,private adminService:AdminService,private authservice:AuthenticateService){
    this.route.params.forEach((params: Params) => {
      this.id = params['_id'];
      console.log('this is id passed',this.id);
     this.adminService.getEventbyId(this.id).subscribe(res=>{
       this.EventObj=res;
     })
  });
  }

  ngOnInit() {
   this.authservice.getEvaluatorUser().subscribe(res=>{
this.EvaluatorNames=res;
console.log('evaluator', this.EvaluatorNames)
   })
    
  
}


Publish(formobj){

  /*const formData = new FormData();
  const files = this.filesToUpload;
  console.log('Inside Publsih...', files);

  for(let i =0; i < files.length; i++) {
    this.formData.append("uploads[]", files[i], files[i]['name']);
  }
  console.log('file data contents :   '+ this.formData.toString());*/
 
//  console.dir('form data: ', formobj.value);

  console.log('form data: ', formobj.value);

  this.adminService.Updatebyid(this.id,formobj.value).subscribe(res=>{
    console.log('this is after publish',res)
})
    
  this.published=true;
}
onFileChange()
{

}

fileChangeEvent(fileInput: any) {
  this.filesToUpload = <Array<File>>fileInput.target.files;
  //this.product.photo = fileInput.target.files[0]['name'];
}

upload(){

/*  const formData = new FormData();
  const files = this.filesToUpload;
  console.log(files);

  for(let i =0; i < files.length; i++) {
    formData.append("uploads[]", files[i], files[i]['name']);
  }
  console.log('form data variable :   '+ formData.toString());
*/

//  this.http.post('http://localhost:3000/SubmitIdea/'+this.teamName, formData)
//  .map(res => res.json())
//  .subscribe(res => console.log('respnse', res))

}


}


