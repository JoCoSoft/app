import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	private _domain = 'https://jocosoft-api.herokuapp.com/';

	constructor(private _http: HttpClient) {}

	public Register(user: User): Observable<User> {
		return this._http.post<User>(`${this._domain}api/v1/users/sign-up`, user);
	}

	public Login(user: User): Observable<User> {
		return this._http.post<User>(`${this._domain}api/v1/users/sign-in`, user);
	}
}
