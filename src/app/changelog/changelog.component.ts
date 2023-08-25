import { Component, Input } from '@angular/core';
import { Changelog } from '../changelog';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.css']
})

export class ChangelogComponent {
    @Input() changelogs?: Changelog[];
}
