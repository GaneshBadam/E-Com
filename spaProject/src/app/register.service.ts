import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:Http) {
     
   }
   regUser(userDetails){
     return this.http.post("http://localhost:3019:/api/register",userDetails);
   }
}
 