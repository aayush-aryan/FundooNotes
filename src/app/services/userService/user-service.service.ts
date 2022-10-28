import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private httpService:HttpService) { 
   
  }

  signup(data: any) {
    console.log(data);

    let header = {
      header: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('https://localhost:13885/api/User/Register', data, false, header)
  }

  signin(data: any) {
    console.log(data);
    let header = {
      header: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('https://localhost:13885/api/User/login', data, false, header)
  }

  forgot(data: any) {
    console.log(data);
    let header = {
      header: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'token'
      })
    }
    return this.httpService.postService('https://localhost:13885/api/User/ForgetPassword?emailId=log2aayusharyan%40gmail.com', data, false, header)
  }
 
  reset(data: any) {
    let header = {
      header: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('https://localhost:13885/User/ResetPassword', data, false, header)
  }
}