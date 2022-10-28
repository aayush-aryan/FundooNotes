import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/userService/user-service.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  resetForm !: FormGroup

  constructor(private formBuilder:FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.resetForm=this.formBuilder.group({
      newpassword: ['', [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-])[a-zA-Z0-9!@#$%^&*()_+=-]{8,}$'), Validators.minLength(8)]],
      confirmnewPassword: ['',Validators.required]
    });
  }
  onSubmit(){
    if (this.resetForm.valid) {
      console.log("valid data", this.resetForm.value);
      console.log("do api call")
      let data = {
        newPassword: this.resetForm.value.newpassword,
        confirmNewPassword: this.resetForm.value.confirmnewPassword
      }
      this.user.reset(data).subscribe((result: any) => console.log(result))
    }
    else {
      console.log('invalid data', this.resetForm.value);
      console.log("api call will not occur")
    }
  }
}
