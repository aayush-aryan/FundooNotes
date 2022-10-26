import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  resetForm !: FormGroup

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.resetForm=this.formBuilder.group({
      newpassword: ['', [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-])[a-zA-Z0-9!@#$%^&*()_+=-]{8,}$'), Validators.minLength(8)]],
      confirmnewPassword: ['',Validators.required]
    });
  }
  onSubmit(){}
}
