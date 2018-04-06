import { UserModel } from './../navbar/User';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from './user';
/* import { Location } from "@angular/common"; */
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AuthenticateService } from './authenticate.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styles:['./login.component.css']									
})

export class LoginFormComponent {
  users: UserModel;
	adminCheck:any;
	userNotRegistered:boolean;
  invalidCredentials:boolean;

  constructor(private _authenticateService: AuthenticateService, private router: Router) { }

// Avishek - What is the purpose of  below code?	
  ngOnInit() {
}

  onSubmit(formValue){
		console.log("Form Value = " + JSON.stringify(formValue, null, 4));
		
/*    this._authenticateService.getUserDetails(formValue.user).subscribe(	
			data => { this.users = data.body['users']; */

		this._authenticateService.getUsers(formValue.user).subscribe(res=> { 
			this.users=new UserModel();
			this.users.FirstName=res.firstname;
			this.users.LastName=res.lastname;
			this.users.Emailid=res.emailid;
			this.users.Contact=res.contact;
		/*	:
			"avishek@gmail.com"
			firstname
			:
			"Avishek"
			lastname
			:
			"Choudhury"
			password
			:
			"abc"
			role
			:*/
			"participant"
			console.log("In subscribe", this.users);
			if(this.users!=null){
				this._authenticateService.StoreUser(this.users)
			}
			
			console.log("In subscribe", this.users);
// Validation of User credentials
			this.userNotRegistered=false;
			this.invalidCredentials=false;
			if(res==null || res==undefined){
				console.log("Invalid Userid...or no data returned!");
				this.userNotRegistered=true;
			} else if (formValue.password !=res.password) {
				console.log("Invalid Password ... ");
				this.invalidCredentials=true;
// Routing based on user role
			} else if ((formValue.password ==res.password) && (res.role =='admin' )){		
				console.log("Inside LoginFormComponent as Admin ... ");
				this.router.navigate(['/AdminHome']);
			} else if ((formValue.password == res.password) && (res.role =='host' )){		
				console.log("Inside LoginFormComponent as host ... ");
				this.router.navigate(['/HostEvent/'+res.emailid]);
			} else if ((formValue.password == res.password) && (res.role =='participant' )){		
				console.log("Inside LoginFormComponent as participant ... ");
//Avishek - update below path after coding complete... 
				this.router.navigate(['/Home']);
			} else if ((formValue.password == res.password) && (res.role =='evaluator' )){		
				console.log("Inside LoginFormComponent as evaluator ... ");
//Avishek - update below path after coding complete... 
				this.router.navigate(['/EvaluateHome/'+res.emailid]);
			} else {
				this.invalidCredentials=true;
				console.log("SOMETHING IS NOT CORRECT!!! ");			
			};
			console.log('Error indicators, Userid:',this.userNotRegistered,' Password:', this.invalidCredentials);
		}, err=>console.log('errpr:',err)); 

	}
	
getLoggedinUsser(){
	return this.users;
}
}

/*   onSubmit(formValue: any){
		   this.router.navigate(['/registerUser']);
  }	  */  
  

