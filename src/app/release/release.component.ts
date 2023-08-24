import { Component, Input } from '@angular/core';

import { ReleaseDTO } from '../release';
import { ChangelogComponent } from '../changelog/changelog.component';
import { AffectedFileComponent } from '../affected-file/affected-file.component';
import { ArtifactComponent } from '../artifact/artifact.component';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.css'],
})
export class ReleaseComponent {
    @Input() rel_dto?: ReleaseDTO;
}
