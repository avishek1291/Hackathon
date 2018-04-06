import { AuthenticateService } from './../authenticate/authenticate.service';
import { AdminService } from './Adminservice.component';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import{MatCardModule, DateAdapter} from    '@angular/material';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  data:any=[];
  
  constructor(private _adminService:AdminService,private authservice:AuthenticateService) {
  var user=this.authservice.Showloggedin();
  //console.log('this is user now',JSON.parse(user))
   }

  ngOnInit() {
this._adminService.getAllEvents().subscribe(res=>{
  console.log('received at angular',res);
  this.data=res;
});
  }
  removeCard(i,id){
console.log('this is index',i)
this.data.splice(i,1);
this._adminService.DeleteEvent(id).subscribe(res=>console.log('this is reponse',res));
console.log(this.data)
  }


}
