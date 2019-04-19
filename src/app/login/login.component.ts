import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { AuthenticationService } from '../services/authentication.service';
import { TokenUser } from '../models/TokenUser';
import { Route, Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

	public _user = new User();

	constructor(private _authenticationService: AuthenticationService, private _router: Router) { }

	ngOnInit() { }

	public onLogin(): void {
		// TODO: API needs to allow CORS Access-Control-Allow-Origin

		// this._authenticationService.Login(this._user).subscribe((response: Token) => {
		// 	console.log(response);
		// 	if (response && response.token) {
		// 		this._router.navigate(['home']);
		// 	}
		// });

		this._router.navigate(['home']);
	}

	public onRegister(): void {
		this._router.navigate(['register']);
	}
}
