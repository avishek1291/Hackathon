
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
  templateUrl: './fileupload.component.html',
  styleUrls: ['./participant.component.css']
})

export class FileUpload  {
    filesToUpload: Array<File> = [];
    constructor(private adminService:AdminService,private route:ActivatedRoute ,private authservice:AuthenticateService,private http: Http, private el: ElementRef) { }
    
     
    upload() {
        const formData: any = new FormData();
        const files: Array<File> = this.filesToUpload;
        console.log(files);
    
        for(let i =0; i < files.length; i++){
            formData.append("uploads[]", files[i], files[i]['name']);
        }
        console.log('form data variable :   '+ formData.toString());
        // formData.append("uploads[]", files[0], files[0]['name']);
       // this.address.documents = files.toString();
    
            this.http.post('http://localhost:3000/SubmitIdea/Rockers', formData)
            .map(res => res.json())
            .subscribe(res => console.log('respnse', res))
    }
    
    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        //this.product.photo = fileInput.target.files[0]['name'];
    }

}
