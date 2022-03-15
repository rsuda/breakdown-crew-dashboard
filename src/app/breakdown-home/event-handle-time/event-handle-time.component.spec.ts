import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHandleTimeComponent } from './event-handle-time.component';

describe('EventHandleTimeComponent', () => {
  let component: EventHandleTimeComponent;
  let fixture: ComponentFixture<EventHandleTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventHandleTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventHandleTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
