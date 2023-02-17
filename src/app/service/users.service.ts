import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseURL = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.baseURL);
  }

  getUser(id: number) {
    return this.http.get(this.baseURL + '/' + id);
  }

  newUser(user: object) {
    return this.http.post(this.baseURL, user);
  }
  updateUser(id: number, user: object) {
    return this.http.put(this.baseURL + '/' + id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseURL + '/' + id);
  }
}
