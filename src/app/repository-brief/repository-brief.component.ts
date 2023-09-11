import { Component, Input, OnInit } from '@angular/core';

import { RepositoryBriefDTO } from '../models/repository';

@Component({
    selector: 'app-repository-brief',
    templateUrl: './repository-brief.component.html',
    styleUrls: ['./repository-brief.component.css']
})
export class RepositoryBriefComponent {
    @Input() rel_brief_dto?: RepositoryBriefDTO;

    ngOnInit() {}
}
