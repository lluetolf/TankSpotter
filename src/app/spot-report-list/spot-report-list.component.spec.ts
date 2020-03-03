import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotReportListComponent } from './spot-report-list.component';

describe('SpotReportListComponent', () => {
  let component: SpotReportListComponent;
  let fixture: ComponentFixture<SpotReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotReportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
