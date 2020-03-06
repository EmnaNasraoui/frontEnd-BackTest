import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-qcm',
  templateUrl: './add-qcm.component.html',
  styleUrls: ['./add-qcm.component.css']
})
export class AddQCMComponent implements OnInit {
  qcmForm: FormGroup;
  text1 = new FormControl();
  value1 = new FormControl();
  text2 = new FormControl();
  value2 = new FormControl();
  text3 = new FormControl();
  value3 = new FormControl();
  text4 = new FormControl();
  value4 = new FormControl();
  constructor(private apiService: ApiService, private router: Router) {
    this.qcmForm = new FormGroup({
      title: new FormControl(),
      choice1: new FormControl({ text1: String, value1: String }),
      choice2: new FormControl({ text2: String, value2: String }),
      choice3: new FormControl({ text3: String, value3: String }),
      choice4: new FormControl({ text4: String, value4: String })
    });
  }

  ngOnInit() {
  }
  addQCMs() {
    console.log(this.text1.value);

    this.qcmForm.value.choice1.text1 = this.text1.value;
    this.qcmForm.value.choice1.value1 = this.value1.value;

    this.qcmForm.value.choice2.text2 = this.text2.value;
    this.qcmForm.value.choice2.value2 = this.value2.value;

    this.qcmForm.value.choice3.text3 = this.text3.value;
    this.qcmForm.value.choice3.value3 = this.value3.value;

    this.qcmForm.value.choice4.text4 = this.text4.value;
    this.qcmForm.value.choice4.value4 = this.value4.value;
    this.apiService.addQCM(this.qcmForm.value).subscribe((data: any) => {
      console.log(data);
      if (data.msg == 'OK') {
        alert('added with succes');
        window.location.reload();

      } else {
        alert('Something went wrong');
      }
    });
  }
}
