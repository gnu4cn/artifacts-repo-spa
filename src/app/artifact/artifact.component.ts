import { OnInit, Component, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import { Artifact } from '../models/artifact';

@Component({
    selector: 'app-artifact',
    templateUrl: './artifact.component.html',
    styleUrls: ['./artifact.component.css']
})
export class ArtifactComponent implements OnInit {
    @Input() artifacts?: Artifact[];

    constructor(public dialog: MatDialog) {}

    openBuildLogDialog(build_log_url: string) {
        const buildLogDialog = this.dialog.open(BuildLogDialog, {
            width: '960px',
            height: '720px',
        });
        let dialog = buildLogDialog.componentInstance;

        dialog.build_log_url = build_log_url;

        buildLogDialog.afterClosed().subscribe(result => {});
    }

    ngOnInit() {}
}

@Component({
    selector: 'build-log-dialog',
    templateUrl: './build-log-dialog.html',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule],
    styles: [`
        ::-webkit-scrollbar:vertical {
            width: 10px;
            background: #aaa;
        }
        .build-log {
            background-color: black;
            color: white;
            font-size: 1em;
            font-family: Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace;
            scrollbar-width: thin;
            display: inline-block;
            width: 100%;
        }`]
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

            this.http.get(this.build_log_url, {responseType:'text'})
            .subscribe(result => {
                this.build_log = this.sanitizer.bypassSecurityTrustHtml(result);
            });
        }
    }
}
