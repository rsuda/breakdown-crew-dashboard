import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCallsTakenWeekComponent } from './graph-calls-taken-week.component';

describe('GraphCallsTakenWeekComponent', () => {
  let component: GraphCallsTakenWeekComponent;
  let fixture: ComponentFixture<GraphCallsTakenWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphCallsTakenWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCallsTakenWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
