import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  forgotform !: FormGroup

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.forgotform =this.formBuilder.group({
      username: ['',[Validators.required ,Validators.email]]
    });
  }
  onSubmit(){}
}
