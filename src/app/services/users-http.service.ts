import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsersDTO } from '../models/users-dto.model';

@Injectable({
  providedIn: 'root'
})
export class UsersHttpService {
  url = '/api/raw/task/users.json';

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<UsersDTO> {
    return this.http.get<UsersDTO>(this.url);
  }
}
