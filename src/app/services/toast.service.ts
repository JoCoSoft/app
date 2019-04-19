import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class ToastService {

	constructor(private _toastController: ToastController) { }

	public async Toast(toastMessage: string, toastDuration: number) {
		const toast = await this._toastController.create({
			message: toastMessage,
			position: 'bottom',
			duration: toastDuration
		});

		toast.present();
	}
}
