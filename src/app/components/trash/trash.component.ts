import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note-service.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  noteList: any
  constructor(private note : NoteServiceService) { }

  ngOnInit(): void {
    this.getAllNote();
  }
  getAllNote() {
    this.note.getNoteList().subscribe((response: any) => {
      console.log(response);
      this.noteList = response.result;
      this.noteList.reverse();
      this.noteList = this.noteList.filter((obj: any) => {
        return obj.isTrash === true
      })

    })
    console.log("call api");
  }
 
}
