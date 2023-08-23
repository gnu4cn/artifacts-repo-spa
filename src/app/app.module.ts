import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import {NgxFilesizeModule} from 'ngx-filesize';

import { ChangelogComponent } from './changelog/changelog.component';
import { ArtifactComponent } from './artifact/artifact.component';
import { AffectedFileComponent } from './affected-file/affected-file.component';
import { ReleaseComponent } from './release/release.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangelogComponent,
    ArtifactComponent,
    AffectedFileComponent,
    ReleaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    NgxFilesizeModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
