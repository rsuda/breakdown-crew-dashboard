import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCallsTakenTodayComponent } from './graph-calls-taken-today.component';

describe('GraphCallsTakenTodayComponent', () => {
  let component: GraphCallsTakenTodayComponent;
  let fixture: ComponentFixture<GraphCallsTakenTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphCallsTakenTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCallsTakenTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
