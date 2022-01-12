import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerSettingComponent } from './countdown-timer-setting.component';

describe('CountdownTimerSettingComponent', () => {
  let component: CountdownTimerSettingComponent;
  let fixture: ComponentFixture<CountdownTimerSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
