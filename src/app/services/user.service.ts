import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL: string = "http://localhost:3001/Users"
  constructor(private http: HttpClient) { }
  getUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.API_URL)
  }
  getUserId(id: number | string): Observable<IUser> {
    return this.http.get<IUser>(`${this.API_URL}/${id}`);
  }
  edit(user : IUser): Observable<IUser>{
    return this.http.put<IUser>(`${this.API_URL}/${user.id}`, user)
  }


}
