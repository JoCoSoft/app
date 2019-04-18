import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

	constructor() { }

	ngOnInit() { }

	public onLogin(): void {
		console.log('login');
	}

	public onRegister(): void {
		console.log('register');
	}
}
