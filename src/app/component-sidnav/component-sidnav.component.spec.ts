import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSidnavComponent } from './component-sidnav.component';

describe('ComponentSidnavComponent', () => {
  let component: ComponentSidnavComponent;
  let fixture: ComponentFixture<ComponentSidnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentSidnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSidnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
