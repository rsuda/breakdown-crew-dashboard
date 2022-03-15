import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphEventsHandledComponent } from './graph-events-handled.component';

describe('GraphEventsHandledComponent', () => {
  let component: GraphEventsHandledComponent;
  let fixture: ComponentFixture<GraphEventsHandledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphEventsHandledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphEventsHandledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
