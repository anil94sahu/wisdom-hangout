import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WisdomPlanComponent } from './wisdom-plan.component';

describe('WisdomPlanComponent', () => {
  let component: WisdomPlanComponent;
  let fixture: ComponentFixture<WisdomPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WisdomPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
