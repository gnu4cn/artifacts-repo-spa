import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactComponent } from './artifact.component';

describe('ArtifactComponent', () => {
  let component: ArtifactComponent;
  let fixture: ComponentFixture<ArtifactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtifactComponent]
    });
    fixture = TestBed.createComponent(ArtifactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
