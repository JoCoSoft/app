import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html'
})
export class AppComponent {
	public appPages = [
		{
			title: 'Home',
			url: '/home',
			icon: 'home'
		},
		{
			title: 'Login',
			url: '/login',
			icon: 'return-right'
		}
	];

	constructor(
		private _platform: Platform,
		private _splashScreen: SplashScreen,
		private _statusBar: StatusBar) {

		this._splashScreen.show();
		this.initializeApp();
	}

	initializeApp() {
		this._platform.ready().then(() => {
			this._statusBar.styleDefault();

			this._splashScreen.hide();
		});
	}
}
