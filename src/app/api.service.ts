import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  addQCM(QCM) {
    return this.http.post('http://localhost:3000/api/addQCM', QCM);

  }
  allQCM() {
    return this.http.get('http://localhost:3000/api/allQCM');

  }
  rigthAnswer(id, answer) {
    return this.http.post('http://localhost:3000/api/rigthAnswer/' + id, answer);
  }
  wrongAnswer(id, answer) {
    return this.http.post('http://localhost:3000/api/wrongAnswer/' + id, answer);
  }
  getUser(id) {
    return this.http.get('http://localhost:3000/api/getUser/' + id);

  }
}
