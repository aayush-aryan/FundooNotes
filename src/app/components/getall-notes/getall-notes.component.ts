import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note-service.service';
@Component({
  selector: 'app-getall-notes',
  templateUrl: './getall-notes.component.html',
  styleUrls: ['./getall-notes.component.scss']
})
export class GetallNotesComponent implements OnInit {
  noteList:any;  //
  constructor(private note:NoteServiceService) { }

  ngOnInit(): void {
    this.getAllNote();
  }
  getAllNote(){
    this.note.getNoteList().subscribe((response:any)=>{
      console.log(response);
      this.noteList=response.result;
      //})
    })
  }
  receiveMessage(event:any){
    this.getAllNote();
  }
}
