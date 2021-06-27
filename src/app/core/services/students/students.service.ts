import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(public http: HttpClient) { }

  getStudents(){
    return this.http.get(`http://hp-api.herokuapp.com/api/characters/students`)
  };
}
