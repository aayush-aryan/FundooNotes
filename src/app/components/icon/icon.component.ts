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
  colorsArr =[{Colorcode:"pink"},{Colorcode:"yellow"},{Colorcode:"orange"},{Colorcode:"rgb(255,99,71)"},{Colorcode:"rgb(152,251,152)"},{Colorcode:"Teal"},{Colorcode:"rgb(106,90,205)"},{Colorcode:"rgb(240,230,140)"},{Colorcode:"rgb(238,130,238)"},{Colorcode:"rgb(255,160,122)"}];
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
  getNoteColor(colour :any){
    this.note.getColorNote(this.noteCard.noteId,colour).subscribe((response:any)=>{
      console.log(response);
    })
  }
}
