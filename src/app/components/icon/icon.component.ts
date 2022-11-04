import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note-service.service';
import { ActivatedRoute } from '@angular/router';
import { TrashComponent } from '../trash/trash.component';
import { ArchieveComponent } from '../archieve/archieve.component';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() noteCard: any;
  noteID: any;
  isArchive: boolean = false;
  isTrash: boolean = false;

  constructor(private note:NoteServiceService,private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    let componentNote = this.activatedRoute.snapshot.component;
    if (componentNote == TrashComponent) {
      this.isTrash = true;
    }

    if (componentNote == ArchieveComponent) {
      this.isArchive = true;
    }
  }
  onArchiev(){
    let reqdata ={ 
      noteID:[this.noteCard.noteId]
    }
    console.log(reqdata);
    this.note.arcieveNote(reqdata).subscribe((Response: any) => {
      console.log(Response);
    })
  }

  trash() {
    this.note.trashNote(this.noteCard.noteId).subscribe((response: any) => {
      console.log(response);
    })
  }
}
