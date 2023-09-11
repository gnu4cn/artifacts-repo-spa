import { Component, OnInit, ViewChild } from '@angular/core';

import {
    MatCalendarCellClassFunction,
} from '@angular/material/datepicker';

import { ReleaseService } from './release.service';
import { RepositoryService } from './repository.service';

import Utils from './utils';
import { ReleaseDTO, DaysReleasedDTO } from './release';
import { RepositoryBriefDTO } from './repository';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    releases: ReleaseDTO[] = [];
    repositories: RepositoryBriefDTO[] = [];
    selectedDate: Date = new Date();
    calMinDate: Date = new Date();
    calMaxDate: Date = new Date();

    // The flag for whether daysReleased ready. If not ready
    // the mat-calendar will not be rendered.
    isDatesReleasedAvailable: boolean = false;
    daysReleased: string[] = [];

    dayDisplayed: string = 'today';

    constructor(
        private releaseService: ReleaseService,
        private repositoryService: RepositoryService,
    ) {}

    // It's for marking the dates release available, and the css style should be
    // placed in ../style.css, if placed in app.component.css, it would not work.
    dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
        const index = this.daysReleased
        .findIndex(x => new Date(x).toLocaleDateString() === cellDate.toLocaleDateString());

        return (index > -1)  ? 'date-released' : '';

    };

    onSelectDate(ev: Date | null) {
        this.releaseService
        .getReleasesAtDate(Utils.formatDate(ev as Date))
        .subscribe(res => {
            this.releases = res.data;
        });

        this.selectedDate = (ev as Date);
        this.dayDisplayed = (ev as Date)
        .toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' });
    }

    ngOnInit() {
        this.releaseService
        .getReleasesAtDate(Utils.formatDate())
        .subscribe(res => {
            this.releases = res.data;
        });

        this.releaseService
        .getDaysReleased()
        .subscribe(res => {
            this.daysReleased = res.data.sort((a, b) => (b > a ? -1 : 1));
            this.isDatesReleasedAvailable = true;

            this.calMinDate = new Date(this.daysReleased[0]);
            this.calMaxDate = new Date(this.daysReleased.at(-1) as string);

        });
    }
}
