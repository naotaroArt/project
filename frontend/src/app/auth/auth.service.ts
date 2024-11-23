import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient)
  baseApiUrl : string = 'http://localhost:5000/auth/'

  login(payload: {email: string, password: string}) {
    return this.http.post(
      `http://localhost:5000/auth/login`,
      payload
    )
  }
}
