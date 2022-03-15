import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCallDurationMyStatsTimeWaitingComponent } from './graph-call-duration-my-stats-time-waiting.component';

describe('GraphCallDurationMyStatsTimeWaitingComponent', () => {
  let component: GraphCallDurationMyStatsTimeWaitingComponent;
  let fixture: ComponentFixture<GraphCallDurationMyStatsTimeWaitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphCallDurationMyStatsTimeWaitingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCallDurationMyStatsTimeWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
