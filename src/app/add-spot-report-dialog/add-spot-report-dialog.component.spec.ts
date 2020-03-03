import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpotReportDialogComponent } from './add-spot-report-dialog.component';

describe('AddSpotReportDialogComponent', () => {
  let component: AddSpotReportDialogComponent;
  let fixture: ComponentFixture<AddSpotReportDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSpotReportDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpotReportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
