import { Component, Input, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

import { AffectedFile } from '../models/affected_file';
import Utils from '../utils';

@Component({
  selector: 'app-affected-file',
  templateUrl: './affected-file.component.html',
  styleUrls: ['./affected-file.component.css']
})
export class AffectedFileComponent {
    @Input() affected_files?: AffectedFile[];
    pageIndex: number = 0;
    affectedFilesCurrentPage: AffectedFile[] = [];

    handlePageEvent(e: PageEvent) {
        this.pageIndex = e.pageIndex;

        this.affectedFilesCurrentPage = Utils
        .getItemsCurrentPage(this.pageIndex, this.affected_files as AffectedFile[]);
    }

    ngOnInit() {
        this.affectedFilesCurrentPage = Utils
        .getItemsCurrentPage(this.pageIndex, this.affected_files as AffectedFile[]);
    }
}
