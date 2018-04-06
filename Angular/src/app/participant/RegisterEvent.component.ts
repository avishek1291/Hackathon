import { AuthenticateService } from './../authenticate/authenticate.service';

import { AdminService } from './../admin/Adminservice.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {FormControl, FormGroup, FormArray } from '@angular/forms';
import{MatCardModule, DateAdapter} from    '@angular/material';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { UserModel } from '../navbar/User';

@Component({
  selector: 'home',
  templateUrl: './RegisterEvent.component.html',
 styleUrls:['./RegisterEvent.css']
  
})
export class RegisterEvent {
 
data=[];
  settings = {
    actions: {
        add: true,
        edit: true,
        delete: true
      },
      
    columns: {
    
      firstname: {
        title: 'First Name',
        
      },
      lastname: {
        title: 'Last Name',
        
      },
      contact: {
        title: 'Contact',
        type:Number
        
      },
      emailid: {
        title: 'Email/UserName',
        type: 'string',
      }
    },
  };

  
/* data = [
    {
      id: 1,
      firstName: "Leanne Graham",
      username: "Bret",
      
    },
    // ... other rows here
    {
      id: 11,
      firstName: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
  
    }
  ];*/

  source: LocalDataSource = new LocalDataSource();
id:any;
Events:any;
allowAdd:boolean=false;
showWarning:boolean=false;
Userobj:UserModel
constructor(private adminService:AdminService ,private router:Router,private route:ActivatedRoute,private authservice:AuthenticateService){
 this.source.load(this.data);
console.log('inside event reg comppo');
this.route.params.forEach((params: Params) => {
  this.id= params['id'];
})
console.log('calling service')
this.adminService.getEventbyId(this.id).subscribe(res=>{
this.Events=res;
console.log(this.Events,'now____')
this.Userobj=this.authservice.Showloggedin();
console.log('emailid: ', this.Userobj);

this.authservice.getUsers(this.Userobj['Emailid']).subscribe(res=>{
  console.log('this is userdata',this.Userobj['Emailid']);
  this.data=[
    {firstname:this.Userobj.FirstName,lastname:this.Userobj.LastName,contact:this.Userobj.Contact,emailid:this.Userobj.Emailid}
  ]

})

})
}

OnInit(){
}

addmember(value){
console.log('value from the form',this.data)
if(this.data.length>this.Events['teamLimit']){
  this.allowAdd=true;
  this.showWarning=true;
}
var temp=this.Events;
var memeberobj=this.Events['TeamList'];

value.Participants=this.data;
console.log('this is from form',value);
memeberobj.push(value);
temp.TeamList=memeberobj;
 this.adminService.UpdateTeam(this.id,memeberobj).subscribe(res=>{
   console.log('this s response',memeberobj)
 })
  }

  

}
