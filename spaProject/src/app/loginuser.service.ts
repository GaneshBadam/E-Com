import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(private http:Http) { }
  loginUser(userDetails){
    return this.http.post("http://localhost:3019/api/login", userDetails);
  }
}
