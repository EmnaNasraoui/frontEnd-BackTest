import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  constructor(private authservice: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {
  }
  loginrUs() {
    this.authservice.loginrUser(this.loginForm.value).subscribe((data: any) => {
      console.log(data);
      if (data.msg == 'OK') {
        this.router.navigateByUrl('/home');
        this.authservice.setToken(data.data.token, this.loginForm.value.remember);
      } else {
        alert('Something went wrong');
      }
    });
  }
}
