import { Component, OnInit } from '@angular/core';
import { VentService } from '../services/vent.service';
import { Vent } from '../models/Vent';
import { JobService } from '../services/job.service';
import { Job } from '../models/Job';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

	private _vent = new Vent();
	private _job = new Job();

	constructor(private _ventService: VentService, private _jobService: JobService) { }

	ngOnInit() { }

	public onRegister(): void {
		this._vent.serial = 'dev-vent';
		this._vent.code = '123456';
		this._ventService.Register(this._vent).subscribe((response: Vent) => {
			console.log('Register: ', response);
			if (response && response.status && response.status === 'registered') {
				// TODO: Toast 'Registered..'
			}
		});

		// TODO: Disable button?
	}

	public onOpen(): void {
		this._job.name = 'open';
		this._job.data.id = '1dea4651-d230-4a46-8845-b8e0c436d8bf';
		this._job.data.serial = 'dev-vent';
		this._job.data.code = '123456';
		this._job.data.degrees = 90;

		this._jobService.Open(this._job).subscribe((response: Job) => {
			console.log('Open: ', response);
			if (response) {
				// TODO: Toast 'Opening..'
			}
		});

		// TODO: Disable button?
	}

	public onClose(): void {
		this._job.name = 'close';
		this._job.data.id = '1dea4651-d230-4a46-8845-b8e0c436d8bf';
		this._job.data.serial = 'dev-vent';
		this._job.data.code = '123456';
		this._job.data.degrees = 90;

		this._jobService.Close(this._job).subscribe((response: Job) => {
			console.log('Close: ', response);
			if (response) {
				// TODO: Toast 'Closing..'
			}
		});

		// TODO: Disable button?
	}
}
