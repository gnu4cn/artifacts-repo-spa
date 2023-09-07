import { Component, Input, OnInit } from '@angular/core';

import { MatCalendarCellCssClasses, MatCalendarCellClassFunction } from '@angular/material/datepicker';

import { RepositoryBriefDTO } from '../repository';

@Component({
    selector: 'app-repository-brief',
    templateUrl: './repository-brief.component.html',
    styleUrls: ['./repository-brief.component.css']
})
export class RepositoryBriefComponent {
    @Input() rel_brief_dto?: RepositoryBriefDTO;

    dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
        const index = this.rel_brief_dto
            ? this.rel_brief_dto.days.findIndex(x => new Date(x).toLocaleDateString() === cellDate.toLocaleDateString())
            : -1;

        if (index > -1) return "date-green";

        return '';
    };

    ngOnInit() {}
}
