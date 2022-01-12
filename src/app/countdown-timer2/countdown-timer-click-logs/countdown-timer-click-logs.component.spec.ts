import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerClickLogsComponent } from './countdown-timer-click-logs.component';

describe('CountdownTimerClickLogsComponent', () => {
  let component: CountdownTimerClickLogsComponent;
  let fixture: ComponentFixture<CountdownTimerClickLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerClickLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerClickLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
