import { Component, Input, OnInit } from '@angular/core';

import { ReleaseDTO } from '../release';
import { ChangelogComponent } from '../changelog/changelog.component';
import { AffectedFileComponent } from '../affected-file/affected-file.component';
import { ArtifactComponent } from '../artifact/artifact.component';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.css'],
})
export class ReleaseComponent implements OnInit {
    @Input() rel_dto?: ReleaseDTO;

    demo: string = 'https://github.com/Senscomm/wise/compare/e892f5fad8bc105ab9324cf110ac2dd352ca7170..6aebe3773235a7bcbfddddeb2ae3d4d03624b000#diff';

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
