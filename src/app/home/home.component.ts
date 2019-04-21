import { Component, OnInit } from '@angular/core';
import { Data } from '../models/Data';
import { Job } from '../models/Job';
import { JobService } from '../services/job.service';
import { ToastService } from '../services/toast.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	private _job: Job;
	private _isMoving = false;

	constructor(
		private _jobService: JobService,
		private _toastService: ToastService
	) {
		this._job = new Job();
		this._job.data = new Data();
	}

	ngOnInit() {}

	public isMoving(): boolean {
		return this._isMoving;
	}

	public onOpen(): void {
		this._job.name = 'open';
		this._job.data.id = 'af0e38cd-e1ad-4474-9944-6c3c2a7be0fc';
		this._job.data.serial = 'IntelliVent';
		this._job.data.code = '1nt3ll1v3nt';
		this._job.data.degrees = 90;

		this._isMoving = true;
		this._jobService.Move(this._job).subscribe((response: Job) => {
			console.log('Open: ', response);
			if (response) {
				this._toastService.Toast('Opening..', 5000);
				setTimeout(() => (this._isMoving = false), 5000);
			}
		});
	}

	public onClose(): void {
		this._job.name = 'close';
		this._job.data.id = 'af0e38cd-e1ad-4474-9944-6c3c2a7be0fc';
		this._job.data.serial = 'IntelliVent';
		this._job.data.code = '1nt3ll1v3nt';
		this._job.data.degrees = 90;

		this._isMoving = true;
		this._jobService.Move(this._job).subscribe((response: Job) => {
			console.log('Close: ', response);
			if (response) {
				this._toastService.Toast('Closing..', 5000);
				setTimeout(() => (this._isMoving = false), 5000);
			}
		});
	}
}
