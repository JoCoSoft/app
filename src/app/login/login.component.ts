import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../models/User";
import { AuthenticationService } from "../services/authentication.service";
import { TokenUser } from "../models/TokenUser";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
    public _user = new User();

    constructor(
        private _authenticationService: AuthenticationService,
        private _router: Router
    ) {}

    ngOnInit() {}

    public onLogin(): void {
        this._authenticationService
            .Login(this._user)
            .subscribe((response: TokenUser) => {
                console.log(response);
                if (response && response.token) {
                    localStorage.setItem("TOKEN", response.token);
                    this._router.navigate(["home"]);
                }
            });
    }

    public onRegister(): void {
        this._router.navigate(["register"]);
    }
}
