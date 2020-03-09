import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotReportMapComponent } from './spot-report-map.component';

describe('SpotReportMapComponent', () => {
  let component: SpotReportMapComponent;
  let fixture: ComponentFixture<SpotReportMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotReportMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotReportMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
