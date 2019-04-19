import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/User';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

	public _user = new User();

	constructor(private _authenticationService: AuthenticationService) { }

	ngOnInit() { }

	public onCreateAccount(): void {
		this._authenticationService.Register(this._user).subscribe((response: User) => {
			console.log(response);

			// TODO: Toast 'please verify via email' -> check api for verification (on loop?) -> upon verification send to home
		});
	}
}
