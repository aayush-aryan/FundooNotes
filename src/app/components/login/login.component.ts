import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signinForm !: FormGroup;
  user ='12'

  constructor(private formBuilder: FormBuilder,private userservices: UserService,private router :Router) { }

  ngOnInit(): void {
    localStorage.setItem('SeesionUser',this.user)
    this.signinForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-])[a-zA-Z0-9!@#$%^&*()_+=-]{8,}$'), Validators.minLength(8)]]

    });

    // 
   // localStorage.setItem('Token',Response.data)
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
      this.userservices.signin(data).subscribe((result: any) => {
        console.log(result.securityToken);
      localStorage.setItem('Token',result.securityToken)
      this.router.navigateByUrl('/Dashboard');
    })
    }
    else {
      console.log('invalid data', this.signinForm.value);
      console.log("api call will not occur")
    }
   
  }
}
