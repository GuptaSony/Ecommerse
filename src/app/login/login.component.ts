import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserService } from "../services/user.service";
import { Router } from '@angular/router';
import { UserAuthenticateInput} from "../shared/models/user-authenticate-input.model";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  myForm: any;
  constructor(private fb: FormBuilder, private user: UserService, private router: Router) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]]


    });
  }

  onSubmit(myform: FormGroup) {
    let username = myform.value.username;
    let password = myform.value.password;
    let userdata = {
      user_name: myform.value.username,
      password: myform.value.password
    }
   
    this.user.loginService(userdata).subscribe(data => {
      console.log(data);
      if (data.result.token) {
        debugger;
        alert(data.result.return_message+' '+data.message);
        this.router.navigate(['/product']);
      }
    },
      err => {
        console.log(err);
      });


  }

}
