import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../loginuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {    
  regResponse;
  message;
  email;
  password;

  constructor(private loginService:LoginUserService, private router:Router) { }

 loginUser(){

    var userDetails={
       
         emailId:this.email,
         password:this.password
    }

    this.loginService.loginUser(userDetails).subscribe(

       (response) =>{
            this.regResponse=response.json();
            console.log(this.regResponse);
          
           if(this.regResponse.status){
               this.router.navigate(['/home']);
            }
           else 
           {
                this.message= this.regResponse.message;
           }
       }

    );
 }
  

}
