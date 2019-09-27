import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AccountsService {
url = 'http://localhost:3000'
  constructor(private http: HttpClient) {}

  register(userData) {
    return this.http.post<any>(this.url, userData);
  }
}
