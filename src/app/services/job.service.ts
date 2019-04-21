import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Job } from "../models/Job";
import { Data } from "../models/Data";
import { ApiService } from "./api.service";
import { AuthenticationService } from "./authentication.service";

@Injectable({
    providedIn: "root"
})
export class JobService extends ApiService {
    constructor(
        private _http: HttpClient,
        private _authService: AuthenticationService
    ) {
        super();
    }

    private getOptions(token: string) {
        return {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
    }

    public Move(job: Job, token: string): Observable<Job> {
        console.log("moving " + JSON.stringify(job));
        // return new Observable<Job>(subscriber => {
        // this._authService
        // 	.GetToken()
        // 	.then(token => {
        return this._http.post<Job>(
            `${this._domain}api/v1/jobs`,
            job,
            this.getOptions(token)
        );
        // 		.subscribe(observer => {
        // 			console.log(observer);
        // 			subscriber.next(observer);
        // 			subscriber.complete();
        // 		})
        // 		.unsubscribe();
        // })
        // .catch(err => {
        // 	console.log(err);
        // 	subscriber.error(err);
        // });
        // });
    }
}
