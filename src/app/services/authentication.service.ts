import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/User";
import { TokenUser } from "../models/TokenUser";

@Injectable({
    providedIn: "root"
})
export class AuthenticationService {
    // TODO READ FROM CONFIG FILE
    private _domain = "https://23aafa66.ngrok.io/";

    constructor(private _http: HttpClient) {}

    public Register(user: User): Observable<User> {
        return this._http.post<User>(
            `${this._domain}api/v1/users/sign-up`,
            user
        );
    }

    public Login(user: User): Observable<TokenUser> {
        return this._http.post<TokenUser>(
            `${this._domain}api/v1/users/sign-in`,
            user
        );
    }
}
