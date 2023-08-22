import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectedFileComponent } from './affected-file.component';

describe('AffectedFileComponent', () => {
  let component: AffectedFileComponent;
  let fixture: ComponentFixture<AffectedFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffectedFileComponent]
    });
    fixture = TestBed.createComponent(AffectedFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
