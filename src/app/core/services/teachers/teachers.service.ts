import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(public http: HttpClient) { }

  getTeachers(){
    return this.http.get(`http://hp-api.herokuapp.com/api/characters/staff`)
  };
}
