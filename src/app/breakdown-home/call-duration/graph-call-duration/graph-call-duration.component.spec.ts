import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCallDurationComponent } from './graph-call-duration.component';

describe('GraphCallDurationComponent', () => {
  let component: GraphCallDurationComponent;
  let fixture: ComponentFixture<GraphCallDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphCallDurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCallDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
