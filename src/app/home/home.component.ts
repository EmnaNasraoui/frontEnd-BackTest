import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  QCMS: any;
  quizForm: FormGroup;
  constructor(private apiService: ApiService, private authservice: AuthService) {
    this.quizForm = new FormGroup({
      score: new FormControl(''),
      answers: new FormControl({ question: String, answer: String, value: String }),
    });
  }

  ngOnInit() {
    this.apiService.allQCM().subscribe((data: any) => {
      console.log(data);
      this.QCMS = data.data;

    });
    this.apiService.getUser(this.authservice.user._id).subscribe((data: any) => {
      console.log(data);
    });
  }
  getAnwser(value, choice, title) {
    console.log(value);
    console.log(choice);
    this.quizForm.value.answers.question = title;
    this.quizForm.value.answers.answer = choice;
    this.quizForm.value.answers.value = value;
    console.log(this.quizForm.value);
    if (value == 'right') {
      this.apiService.rigthAnswer(this.authservice.user._id, this.quizForm.value).subscribe((data: any) => {
        console.log(data);
      });
    }
    if (value == 'wrong') {
      this.apiService.wrongAnswer(this.authservice.user._id, this.quizForm.value).subscribe((data: any) => {
        console.log(data);
      });
    }
  }
}
