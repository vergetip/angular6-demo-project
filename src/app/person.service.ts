import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Person } from './person';
import { Info } from './info';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  // API: GET BY GENDER
  public getByGender(gender: string){
    const url = `http://uinames.com/api/?amount=10&gender=${gender}`;
    console.log(url);
    return this.http.get<Person[]>(url);
  }

  // API: GET INFO ABOUT NAME OR NAMES
  public getInfo(names: [string]){
    var namesAsString = names.join('+');
    const url = `https://api.duckduckgo.com/?q=${namesAsString}&format=json&pretty=1`;
    console.log(url);
    return this.http.get<Info>(url);
  }

}