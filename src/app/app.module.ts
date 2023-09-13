import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { FlexLayoutModule } from '@angular/flex-layout';
import {NgxFilesizeModule} from 'ngx-filesize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChangelogComponent } from './changelog/changelog.component';
import { ArtifactComponent } from './artifact/artifact.component';
import { AffectedFileComponent } from './affected-file/affected-file.component';
import { ReleaseComponent } from './release/release.component';
import { LongFilenamePipe } from './long-filename.pipe';
import { ReleaseOverviewComponent } from './release-overview/release-overview.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { RepositoryBriefComponent } from './repository-brief/repository-brief.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangelogComponent,
    ArtifactComponent,
    AffectedFileComponent,
    ReleaseComponent,
    LongFilenamePipe,
    ReleaseOverviewComponent,
    BreadCrumbComponent,
    RepositoryBriefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatDatepickerModule,
    MatChipsModule,
    MatIconModule,
    FlexLayoutModule,
    NgxFilesizeModule,
    MatBadgeModule,
    HttpClientModule,
    MatNativeDateModule,
    MatDialogModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [
      MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
