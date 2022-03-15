import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphEventsHandledMonthComponent } from './graph-events-handled-month.component';

describe('GraphEventsHandledMonthComponent', () => {
  let component: GraphEventsHandledMonthComponent;
  let fixture: ComponentFixture<GraphEventsHandledMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphEventsHandledMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphEventsHandledMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
