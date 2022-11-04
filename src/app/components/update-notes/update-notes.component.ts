import { Component, OnInit,EventEmitter, Output, Inject } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {
  title: any
  description: any
 // bgColour: any
  noteId: any
  
  constructor(public note: NoteServiceService,
    public dialogRef: MatDialogRef<UpdateNotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data)
    this.title = this.data.title
    this.description = this.data.description
    this.noteId=this.data.noteId
  }

  onNoClick(): void {
    console.log("strarrt");
    let reqdata ={ 
      title: this.title,
      description: this.description,
      bgColour : 'green'
    }
    console.log(reqdata)
    this.note.updateNote(this.noteId,reqdata).subscribe((Response: any) => {
      console.log(Response);
    });
    this.dialogRef.close();
  }

}
