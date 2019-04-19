import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../models/Job';
import { Data } from '../models/Data';

@Injectable({
	providedIn: 'root'
})
export class JobService {

	private _domain = 'https://jocosoft-api.herokuapp.com/';

	constructor(private _http: HttpClient) {}

	public Open(job: Job): Observable<Job> {
		return this._http.post<Job>(`${this._domain}api/v1/jobs`, job);
	}

	public Close(job: Job): Observable<Job> {
		return this._http.post<Job>(`${this._domain}api/v1/jobs`, job);
	}
}
