import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCallsTakenComponent } from './graph-calls-taken.component';

describe('GraphCallsTakenComponent', () => {
  let component: GraphCallsTakenComponent;
  let fixture: ComponentFixture<GraphCallsTakenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphCallsTakenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCallsTakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
