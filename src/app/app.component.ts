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
		},
		{
			title: 'Register',
			url: '/register',
			icon: 'rocket'
		}
	];

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar) {

		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
}
