import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './services/authentication.service';
import { HomeComponent } from './home/home.component';
import { JobService } from './services/job.service';
import { ToastService } from './services/toast.service';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
		HomeComponent
	],
	entryComponents: [],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		IonicStorageModule.forRoot(),
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	],
	providers: [
		StatusBar,
		SplashScreen,
		{
			provide: RouteReuseStrategy,
			useClass: IonicRouteStrategy
		},
		AuthenticationService,
		JobService,
		ToastService
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
