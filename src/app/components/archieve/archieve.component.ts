import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note-service.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
  noteList: any
  constructor(private note: NoteServiceService) { }

  ngOnInit(): void {
    this.getAllNote();
  }
  getAllNote() {
    this.note.getNoteList().subscribe((response: any) => {
      console.log(response.result);
      this.noteList = response.result;
      this.noteList = this.noteList.filter((obj: any) => {
        return obj.isArchieve===true && obj.isTrash===false
      })

    })
    console.log("call api");
  }
  receiveMessage(event: any) {
    this.getAllNote();
  }
}
