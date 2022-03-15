import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCallDurationTimeWaitingComponent } from './graph-call-duration-time-waiting.component';

describe('GraphCallDurationTimeWaitingComponent', () => {
  let component: GraphCallDurationTimeWaitingComponent;
  let fixture: ComponentFixture<GraphCallDurationTimeWaitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphCallDurationTimeWaitingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCallDurationTimeWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
