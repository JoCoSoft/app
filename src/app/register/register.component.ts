import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/User';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

	public _user = new User();

	constructor(private _authenticationService: AuthenticationService, private _toastService: ToastService, private _router: Router) { }

	ngOnInit() { }

	public onCreateAccount(): void {
		this._authenticationService.Register(this._user).subscribe((response: User) => {
			console.log(response);
			if (response) {
				this._toastService.Toast('Registered -- Please verify via your email address', 5000);
				this._router.navigate(['login']);
			}

			// TODO: Toast 'please verify via email' -> check api for verification (on loop?) -> upon verification send to login
		});
	}
}
