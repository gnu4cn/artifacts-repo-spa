import { Component, OnInit } from '@angular/core';

import { ReleaseService } from './release.service';
import { ReleaseDTO } from './release';
import { ReleaseComponent } from './release/release.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    releases: ReleaseDTO[] = [];

    constructor(private releaseService: ReleaseService) {}

    ngOnInit() {
        this.releaseService.getReleases().subscribe(res => {
            this.releases = res.data;
        });
    }
}
