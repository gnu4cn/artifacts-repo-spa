import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangelogComponent } from './changelog/changelog.component';
import { ArtifactComponent } from './artifact/artifact.component';
import { AffectedFileComponent } from './affected-file/affected-file.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangelogComponent,
    ArtifactComponent,
    AffectedFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
