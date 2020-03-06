import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private authservice: AuthService, private router: Router) {
    this.registerForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {
  }
  registerUs() {
    this.authservice.registerUser(this.registerForm.value).subscribe((data: any) => {
      console.log(data);
      if (data.msg == 'Ok') {
        this.router.navigateByUrl('/login');
      } else {
        alert('Something went wrong');
      }
    });
  }
}
