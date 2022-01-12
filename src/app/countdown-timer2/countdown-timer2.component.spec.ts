import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimer2Component } from './countdown-timer2.component';

describe('CountdownTimer2Component', () => {
  let component: CountdownTimer2Component;
  let fixture: ComponentFixture<CountdownTimer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimer2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
