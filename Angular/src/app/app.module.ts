import { Auth0Service } from './auth0Service/auth0.service'
import { FileUpload } from './participant/fileupload.component';
import { ViewUserComponent } from './authenticate/viewuser.component';
import { EvaluateService } from './evaluator/evaluate.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';   
import { RegisterEvent } from './participant/RegisterEvent.component';
import { HomeComponent } from './participant/home.component';
import { Preview } from './host/preview.component';
import { HostConfigure } from './host/hostConfigure.component';
import { routing } from './app.routes';
import { AuthenticateService } from './authenticate/authenticate.service';
import { HostService } from './host/hostService.component';
import { AdminAdd } from './admin/adminAdd.component';
import { AdminUpdate } from './admin/adminUpdate.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {Location} from '@angular/common'
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import{RouterModule} from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import{MatCardModule, MatDatepickerModule,MatNativeDateModule,MatExpansionModule} from'@angular/material'
import {MatInputModule} from  '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{AdminService} from './admin/Adminservice.component';
import { HostComponent } from './host/host.component';
import{LoginFormComponent} from './authenticate/login-form.component';
import { ParticipantComponent } from './participant/participant.component';
import { ViewEventComponent } from './participant/viewEvent.component';
import { RegistrationComponent } from './authenticate/registration.component'
import{EvaluateComponent} from './evaluator/evaluate.component';
import { EvaluateEventComponent } from './evaluator/evaluateEvent.component';
import { CookieService } from 'ngx-cookie-service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FileSelectDirective } from 'ng2-file-upload';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import {AuthguardService} from './AuthGuard/authguard-service.service'
const config = {
  apiKey: "AIzaSyD563MLLqUzE8tJ9XkE9CR4CL81ff8ypTk",
  authDomain: "sociallogin2529.firebaseapp.com",
  databaseURL: "https://sociallogin2529.firebaseio.com",
  projectId: "sociallogin2529",
  storageBucket: "sociallogin2529.appspot.com",
  messagingSenderId: "495881455227"
};
@NgModule({
  declarations: [
    FileUpload,
    FileSelectDirective,
    Preview,
    AdminAdd,
    AdminUpdate,
    AppComponent,
    AdminComponent,
    HostComponent,
    LoginFormComponent,
    HostConfigure,
    ParticipantComponent,
    HomeComponent,
    RegisterEvent,
    RegistrationComponent,
    EvaluateComponent,
    EvaluateEventComponent,
    ViewUserComponent,
    ViewEventComponent,
    LandingPageComponent,
    NavbarComponent
    //AdminService
    //HttpModule
    //RouterModule
  
  ],
  
  imports: [
    BrowserModule,MatCardModule,
    FormsModule,HttpModule,Ng2SmartTableModule, MatDatepickerModule,MatNativeDateModule,MatExpansionModule,ReactiveFormsModule,
    routing,AngularFireModule.initializeApp(config)
  ],
  providers: [AngularFireAuth,Auth0Service,HttpModule,AdminService,HostService,AuthenticateService,EvaluateService,CookieService,AuthguardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
