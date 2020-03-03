import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotReportDetailComponent } from './spot-report-detail.component';

describe('SpotReportDetailComponent', () => {
  let component: SpotReportDetailComponent;
  let fixture: ComponentFixture<SpotReportDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotReportDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotReportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
