import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vent } from '../models/Vent';

@Injectable({
	providedIn: 'root'
})
export class VentService {

	private _domain = 'https://jocosoft-api.herokuapp.com/';

	constructor(private _http: HttpClient) {}

	public Register(vent: Vent): Observable<Vent> {
		return this._http.post<Vent>(`${this._domain}api/v1/vents/register`, vent);
	}
}
