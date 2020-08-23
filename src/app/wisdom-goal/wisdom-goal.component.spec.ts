import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WisdomGoalComponent } from './wisdom-goal.component';

describe('WisdomGoalComponent', () => {
  let component: WisdomGoalComponent;
  let fixture: ComponentFixture<WisdomGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WisdomGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
