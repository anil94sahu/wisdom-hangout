import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WisdomHeaderComponent } from './wisdom-header.component';

describe('WisdomHeaderComponent', () => {
  let component: WisdomHeaderComponent;
  let fixture: ComponentFixture<WisdomHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WisdomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
