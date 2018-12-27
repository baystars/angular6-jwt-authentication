import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'http://localhost:8080/user-portal/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    let users = [
      {id: 1, username: 'Dhiraj Ray', salary: 600, age: 57},
      {id: 2, username: 'Tom Jac', salary: 1000, age: 55},
      {id: 3, username: 'Hary Pan', salary: 500, age: 44},
      {id: 4, username: 'praks pb', salary: 300, age: 30},
    ];
    return of(users);
    //return this.http.get<User[]>(this.baseUrl+'users');
  }
}
