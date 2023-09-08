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
    isDatesReleasedAvailable: boolean = false;
    releases: ReleaseDTO[] = [];
    repositories: RepositoryBriefDTO[] = [];
    selectedDate: Date = new Date();
    daysReleased: string[] = [];
    dayDisplayed: string = 'today';

    constructor(
        private releaseService: ReleaseService,
        private repositoryService: RepositoryService,
    ) {}

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
            this.daysReleased = res.data;
            this.isDatesReleasedAvailable = true;
        });
    }
}
