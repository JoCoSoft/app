import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Job } from "../models/Job";

@Injectable({
    providedIn: "root"
})
export class JobService {
    // TODO READ FROM CONFIG FILE
    private _domain = "http://192.168.1.122";

    constructor(private _http: HttpClient) {}

    public Open(job: Job): Observable<Job> {
        return this._http.post<Job>(`${this._domain}/move`, job, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("TOKEN")}`
            },
            params: {
                name: job.name
            }
        });
    }

    public Close(job: Job): Observable<Job> {
        return this._http.post<Job>(`${this._domain}/move`, job, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("TOKEN")}`
            },
            params: {
                name: job.name
            }
        });
    }
}
