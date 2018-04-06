import { AuthguardService } from './AuthGuard/authguard-service.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FileUpload } from './participant/fileupload.component';

import { RegistrationComponent } from './authenticate/registration.component';
import { RegisterEvent } from './participant/RegisterEvent.component';
import { HomeComponent } from './participant/home.component';
import { Preview } from './host/preview.component';
import { Routes, RouterModule } from '@angular/router';

import{LoginFormComponent} from './authenticate/login-form.component'
import { AdminUpdate } from './admin/adminUpdate.component';
import { AdminComponent } from './admin/admin.component';
import { AdminAdd } from './admin/adminAdd.component';
import { HostComponent } from './host/host.component';
import { HostConfigure } from './host/hostConfigure.component';
import{EvaluateComponent} from './evaluator/evaluate.component';
import { EvaluateEventComponent } from './evaluator/evaluateEvent.component';
import { ViewUserComponent } from './authenticate/viewuser.component';
import{ViewEventComponent} from './participant/viewEvent.component'

const appRoutes: Routes =[
    {path:'', redirectTo:'LandingPage',pathMatch:'full'},
    {path:'LandingPage',component:LandingPageComponent},
    {path:'Login', component:LoginFormComponent},
    {path:'Register', component:RegistrationComponent},
    {path:'ViewUser/:emailid', component:ViewUserComponent},
    {path:'updateCard/:_id', component:AdminUpdate},
    {path:'AdminHome', component:AdminComponent},
    {path:'AddEvent',component:AdminAdd},
    {path:'viewEvent/:_eventId',component:ViewEventComponent},
    {path:'HostEvent/:hostname',
    component:HostComponent,
    children:[{
        path:'configure/:_id',component:HostConfigure
    }]
    },
    {path:'preview/:_id',component:Preview},
    {path:'fileupload',component:FileUpload},
    {path:'Home',component:HomeComponent,canActivate:[AuthguardService]},
    {path:'RegisterEvent/:id',component:RegisterEvent},
    {path:'EvaluateHome/:evaluatorname',component:EvaluateComponent},
//    children:[{
    {path:'EvaluateHome/:evaluatorname/evaluate/:_id',component:EvaluateEventComponent}
  ];

export const routing = RouterModule.forRoot(appRoutes);
