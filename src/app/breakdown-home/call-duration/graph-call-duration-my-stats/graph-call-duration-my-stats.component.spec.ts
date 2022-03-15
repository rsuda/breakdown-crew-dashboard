import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCallDurationMyStatsComponent } from './graph-call-duration-my-stats.component';

describe('GraphCallDurationMyStatsComponent', () => {
  let component: GraphCallDurationMyStatsComponent;
  let fixture: ComponentFixture<GraphCallDurationMyStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphCallDurationMyStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCallDurationMyStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
