import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  gettodaysdate(){
    let date= new Date();
      return date;
  }
  getmyname(){
    return 'gopi';
  }
  getalluser():Observable<User[]>{
  return this.http.get<User[]>('https://jsonplaceholder.tyicode.com/users');

  }
}
