import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphEventsHandledWeekComponent } from './graph-events-handled-week.component';

describe('GraphEventsHandledWeekComponent', () => {
  let component: GraphEventsHandledWeekComponent;
  let fixture: ComponentFixture<GraphEventsHandledWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphEventsHandledWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphEventsHandledWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
