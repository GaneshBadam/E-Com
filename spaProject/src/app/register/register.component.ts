import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

userdata(f){
  console.log(JSON.stringify(f.value))    
}
regResponse;
firstname;
lastname;
email;
dob;
mobile;
password;
constructor(private registerService:RegisterService){}
registerUser(f){
  let userDetails={
    firstName:f.firstname,
    lastName:f.lastname,
    emailId:f.email,
    DOB:f.dob,
    mobileNumber:f.mobile,
    password:f.password,
  
  }
  this.registerService.regUser(userDetails).subscribe(
    (Response)=>{
      console.log("res",Response.json());
      this.regResponse=Response.json();
    }
  );
  alert("Register Successful");

}
}

