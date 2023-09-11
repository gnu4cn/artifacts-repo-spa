import { Component, Input } from '@angular/core';
import { AffectedFile } from '../models/affected_file';

@Component({
  selector: 'app-affected-file',
  templateUrl: './affected-file.component.html',
  styleUrls: ['./affected-file.component.css']
})
export class AffectedFileComponent {
    @Input() affected_files?: AffectedFile[];
}
