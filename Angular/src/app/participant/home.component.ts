import { AuthenticateService } from './../authenticate/authenticate.service';
import { AdminService } from './../admin/Adminservice.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  
})
export class HomeComponent {
Events:any;
user:any;
userName:String;
constructor(private _adminService:AdminService,private authService:AuthenticateService) {
//this.user=this.authService.Showloggedin()
//console.log('logged in user',this.user)
   }


  ngOnInit() {
      this._adminService.getAllEvents().subscribe(res=>{
          this.Events=res;
          //this.userName=this.user
          //console.log('this is name',this.userName)
      })

    
  }

  RegisterForEvent(){

  }

  

}
