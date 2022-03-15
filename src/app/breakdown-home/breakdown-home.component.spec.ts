import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakdownHomeComponent } from './breakdown-home.component';

describe('BreakdownHomeComponent', () => {
  let component: BreakdownHomeComponent;
  let fixture: ComponentFixture<BreakdownHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakdownHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakdownHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
