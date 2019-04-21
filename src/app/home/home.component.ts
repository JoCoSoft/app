import { Component, OnInit } from "@angular/core";
import { Data } from "../models/Data";
import { Job } from "../models/Job";
import { JobService } from "../services/job.service";
import { ToastService } from "../services/toast.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
    private _job: Job;

    constructor(
        private _jobService: JobService,
        private _toastService: ToastService
    ) {
        this._job = new Job();
        this._job.data = new Data();
    }

    ngOnInit() {}

    public onOpen(): void {
        this._job.name = "open";
        this._job.data.id = "e9652c37-cbb7-47d1-966d-4920d2e885a5";
        this._job.data.serial = "dev-vent";
        this._job.data.code = "123456";
        this._job.data.degrees = 90;

        this._jobService.Open(this._job).subscribe((response: Job) => {
            console.log("Open: ", response);
            if (response) {
                this._toastService.Toast("Opening..", 5000);
            }
        });

        // TODO: Disable button?
    }

    public onClose(): void {
        this._job.name = "close";
        this._job.data.id = "e9652c37-cbb7-47d1-966d-4920d2e885a5";
        this._job.data.serial = "dev-vent";
        this._job.data.code = "123456";
        this._job.data.degrees = 90;

        this._jobService.Close(this._job).subscribe((response: Job) => {
            console.log("Close: ", response);
            if (response) {
                this._toastService.Toast("Closing..", 5000);
            }
        });

        // TODO: Disable button?
    }
}
