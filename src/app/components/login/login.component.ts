import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signinForm !: FormGroup;

  constructor(private formBuilder: FormBuilder,private user: UserService) { }

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-])[a-zA-Z0-9!@#$%^&*()_+=-]{8,}$'), Validators.minLength(8)]]
    });
  }
  onSubmit() {
         // stop here if form is invalid
    if (this.signinForm.valid) {
      console.log("valid data", this.signinForm.value);
      console.log("do api call")
      let data = {
        Email: this.signinForm.value.username,
        Password: this.signinForm.value.password
      }
      this.user.signin(data).subscribe((result: any) => console.log(result))
    }
    else {
      console.log('invalid data', this.signinForm.value);
      console.log("api call will not occur")
    }
  }
}
