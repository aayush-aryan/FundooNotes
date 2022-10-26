import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
   
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.pattern('[A-Z]{1}[a-z]{2,}$'), Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.pattern('[A-Z]{1}[a-z]{2,}$'), Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-])[a-zA-Z0-9!@#$%^&*()_+=-]{8,}$'), Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    });
  }
  onSubmit() {}
}
 