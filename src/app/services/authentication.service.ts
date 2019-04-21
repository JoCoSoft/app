import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/User";
import { TokenUser } from "../models/TokenUser";
import { ApiService } from "./api.service";
import { Storage } from "@ionic/storage";

@Injectable({
    providedIn: "root"
})
export class AuthenticationService extends ApiService {
    constructor(private _http: HttpClient, private storage: Storage) {
        super();
    }

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

    public async GetToken(): Promise<string> {
        return await this.storage.get("AUTH_TOKEN");
    }

    public async PersistToken(token: string) {
        await this.storage.set("AUTH_TOKEN", token);
    }
}
