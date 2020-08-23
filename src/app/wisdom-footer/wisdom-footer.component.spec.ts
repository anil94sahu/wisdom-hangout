import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WisdomFooterComponent } from './wisdom-footer.component';

describe('WisdomFooterComponent', () => {
  let component: WisdomFooterComponent;
  let fixture: ComponentFixture<WisdomFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WisdomFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
