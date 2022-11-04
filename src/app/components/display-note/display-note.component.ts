import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  note: any
  FilterMsg:string=""
  bgColour:any
  @Input() NoteArray: any
  @Output() refreshEvent = new EventEmitter<any>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }
  openDialog(note: any): void {
    const dialogRef = this.dialog.open(UpdateNotesComponent, {
      width: '600px',
      
      data: note    
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  receivedMessage(event: any) {
    console.log(event);
    this.refreshEvent.emit("hello")
  }
  // getNoteColor(note :any){
  //   this.note.getColorNote().subscribe((response:any)=>{
  //     console.log(response);
  //   })
  // }
}
