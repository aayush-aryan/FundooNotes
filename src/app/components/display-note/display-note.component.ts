import { Component, Input, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
 // note: any
 // FilterMsg:string=""
  @Input() NoteArray: any

  constructor() { }

  ngOnInit(): void {

  }

}
