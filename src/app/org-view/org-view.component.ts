import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ReleaseService } from './release.service';
import { RepositoryService } from './repository.service';

import { ReleaseDTO, DaysReleasedDTO } from './models/release';
import { RepositoryBriefDTO } from './models/repository';

import Utils from './utils';

@Component({
  selector: 'app-org-view',
  templateUrl: './org-view.component.html',
  styleUrls: ['./org-view.component.css']
})
export class OrgViewComponent {
    route: ActivatedRoute = inject(ActivatedRoute);
    org: string = '';
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
    ) {
        this.org = this.route.snapshot.params['org'];
    }

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

        let ev_date = (ev as Date)
        .toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' });

        this.dayDisplayed = (ev as Date).toLocaleDateString() === new Date().toLocaleDateString()
        ? `today, ${ev_date}`
        : ev_date;
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
