import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note-service.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() noteCard: any;
  noteID: any;
  isArchieve:boolean=false;
  
  constructor(private note:NoteServiceService) { }
  ngOnInit(): void {
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
}
