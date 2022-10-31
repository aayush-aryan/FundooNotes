import { Component, OnInit } from '@angular/core';
 import { NoteServiceService } from 'src/app/services/note-service.service';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  createnoteForm !:FormGroup
  isShow = false;
  title: any;
  description: any;
  constructor(private formBuilder:FormBuilder,private note :NoteServiceService) { }

  ngOnInit(): void {
    this.createnoteForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }
  show() {
    this.isShow = true;
  }
  close() {
    this.isShow = false;
    console.log(this .createnoteForm.value.title, this.createnoteForm.value.description)
    let data={
      title:this .createnoteForm.value.title,
      description:this.createnoteForm.value.description,
      bgColour:"green"
    }
     this.note.AddNotes(data).subscribe((result: any) => console.log(result))
  }
}
