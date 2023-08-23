import { OnInit, Component, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import { Artifact } from '../artifact';

@Component({
    selector: 'app-artifact',
    templateUrl: './artifact.component.html',
    styleUrls: ['./artifact.component.css']
})
export class ArtifactComponent implements OnInit {
    @Input() artifact?: Artifact;

    constructor(public dialog: MatDialog) {}

    openBuildLogDialog() {
        const buildLogDialog = this.dialog.open(BuildLogDialog);
        let dialog = buildLogDialog.componentInstance;

        if (this.artifact)
            dialog.build_log_url = this.artifact.build_log_url;

        buildLogDialog.afterClosed().subscribe(result => {});
    }

    ngOnInit() {}
}

@Component({
    selector: 'build-log-dialog',
    templateUrl: './build-log-dialog.html',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule],
})
export class BuildLogDialog implements OnInit {
    @Input() build_log_url?: string;
    build_log_title?: string;
    build_log: any;

    constructor(
        private http: HttpClient,
        private sanitizer: DomSanitizer
    ){}

        ngOnInit() {
            if (this.build_log_url) {
                this.build_log_title = this.build_log_url.split('/').pop();
                this.http.get(this.build_log_url, {responseType:'text'}).subscribe(result => {
                    this.build_log = this.sanitizer.bypassSecurityTrustHtml(result);
                });
            }
        }
}
