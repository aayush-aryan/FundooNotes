import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from './httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  token: any;
  receiveData: any;
  constructor(private http: HttpService) {
    this.token = localStorage.getItem('Token')
}
AddNotes(data: any) {
  console.log(data,this.token);
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+this.token 
    })
  }
  return this.http.postService("https://localhost:13885/api/Note/AddNote", data, true, header)
}
getNoteList(){

  let header= {
    headers: new HttpHeaders({

      'Content-type': 'application/json',
      'Authorization': "Bearer "+this.token
    })
  }
    return this.http.getService("https://localhost:13885/api/Note/GetAllNotes", true,header)

}
}
