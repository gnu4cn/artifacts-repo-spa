import { Component, Input, OnInit } from '@angular/core';

import { ReleaseDTO } from '../release';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.css'],
})
export class ReleaseComponent implements OnInit {
    @Input() rel_dto?: ReleaseDTO;

    getShortDiffsUrl(url: string): string {
        let raw = url.split('/').pop() as string;
        let output = url.replace(raw, '');

        let commitIds = raw.split('..');

        let previousCommitId = commitIds[0].slice(0, 6);
        let currentCommitId = commitIds[1].slice(0, 6);

        return output.concat(previousCommitId, '..', currentCommitId, '#diffs')
    }

    ngOnInit() {}
}
