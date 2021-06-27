import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(public http: HttpClient) { }

  getCharacters(nameHouse:string){
    return this.http.get(`http://hp-api.herokuapp.com/api/characters/house/${nameHouse}`)
  };
}
