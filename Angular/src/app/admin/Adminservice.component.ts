import {Injectable} from '@angular/core';
//import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import{FileUploader,FileSelectDirective} from 'ng2-file-upload'
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
@Injectable()
export class AdminService{
count:number=0;
result :any='';
private _Eventurlget = "http://localhost:3000/getEvents/";
private _addurlpost="http://localhost:3000/addEvent";
private _deleteurl="http://localhost:3000/deleteEvent/";
private _EventbyId="http://localhost:3000/getEvent/";
private _UpdatebyId="http://localhost:3000/updateEvent/";
private _participantcheck="http://localhost:3000/user/Home/";
private _updateTeam="http://localhost:3000/updateTeam/";
private _fileupload="http://localhost:3000/SubmitIdea/";

 constructor(private _http:Http) {
  
  }
   getAllEvents(){
    console.log("inside service")
return this._http.get(this._Eventurlget).map(res=>res.json());

  }
getEventbyId(id){
  console.log('in get event by id');
  console.log(this._EventbyId+':'+id);
  return this._http.get(this._EventbyId+id).map(res=>res.json());
}


  AddEvent(resource) {
    console.log(typeof JSON.stringify(resource),'in add event');
    return this._http.post(this._addurlpost, resource).map(res=>res.json());
      
  }
DeleteEvent(id){
  console.log('in delete event service',id)
  return this._http.delete(this._deleteurl+id).map(res=>res.json());
}

Updatebyid(id,value){
  console.log('inside update of service');
  //uploader:FileUploader=new FileUploader(); 
  
  return this._http.patch(this._UpdatebyId+id,value).map(res=>{
    res.json()
  });
}
UpdateTeam(id,value){
  console.log('inside team update of service');
   
  
  return this._http.patch(this._updateTeam+id,value).map(res=>{
    res.json()
  });
}
checkParticipant(id,email){
  console.log('in check event service',id)
  return this._http.get(this._participantcheck+id+'/'+email).map(res=>res.json());
}
uploadIdea(teamName,value){ 
  const formData: any = new FormData();
  const files: Array<File> = value;
  console.log(files);

  for(let i =0; i < files.length; i++){
      formData.append("uploads[]", files[i], files[i]['name']);
  }
  console.log('form data variable :   '+ formData.toString());
  // formData.append("uploads[]", files[0], files[0]['name']);
 // this.address.documents = files.toString();

    

return this._http.patch(this._fileupload+teamName,formData).map(res=>res.json());
}

}
