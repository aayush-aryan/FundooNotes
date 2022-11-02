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
updateNote(noteId:any,reqdata: any) {
  console.log("hello",reqdata);
  console.log(this.token);

  let header = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization':"Bearer " + this.token
    })
  }
  return this.http.putService("https://localhost:13885/api/Note/UpdateUserNote?noteId="+noteId,reqdata, true, header)
}
arcieveNote(reqdata: any) {
  console.log("Request",reqdata);
  console.log(this.token);

  let header = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization':'Bearer ' + this.token
    })
  }
  return this.http.putService(`https://localhost:13885/api/Note/ArchieveNotes?noteID=${reqdata.noteID}`, reqdata, true, header)
}
trashNote(noteId: any) {

  console.log("token", this.token)

  let headerOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    })
  }
  return this.http.putService(`https://localhost:13885/api/Note/TrashNotes?noteID=${noteId}`, {}, true, headerOption)
}
}
