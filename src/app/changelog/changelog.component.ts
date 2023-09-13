import { Component, Input, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

import { Changelog } from '../models/changelog';
import Utils from '../utils';

@Component({
    selector: 'app-changelog',
    templateUrl: './changelog.component.html',
    styleUrls: ['./changelog.component.css']
})

export class ChangelogComponent {
    @Input() changelogs?: Changelog[];
    pageIndex: number = 0;
    changelogsCurrentPage: Changelog[] = [];

    handlePageEvent(e: PageEvent) {
        this.pageIndex = e.pageIndex;
        this.changelogsCurrentPage = Utils
        .getItemsCurrentPage(this.pageIndex, this.changelogs as Changelog[]);
    }

    ngOnInit() {
        this.changelogsCurrentPage = Utils
        .getItemsCurrentPage(this.pageIndex, this.changelogs as Changelog[]);
    }
}
