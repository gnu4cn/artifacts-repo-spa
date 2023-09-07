import { Component, OnInit } from '@angular/core';

import { ReleaseService } from './release.service';
import { RepositoryService } from './repository.service';

import Utils from './utils';
import { ReleaseDTO } from './release';
import { RepositoryBriefDTO } from './repository';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    releases: ReleaseDTO[] = [];
    repositories: RepositoryBriefDTO[] = [];

    constructor(
        private releaseService: ReleaseService,
        private repositoryService: RepositoryService,
    ) {}

    ngOnInit() {
        this.releaseService.getReleasesAtDate(Utils.formatDate())
        .subscribe(res => {
            this.releases = res.data;
        });

        this.repositoryService.getRepositoriesBrief()
        .subscribe(res => {
            this.repositories = res.data;
            console.log(this.repositories);
        });
    }
}
