import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WisdomTestimonialComponent } from './wisdom-testimonial.component';

describe('WisdomTestimonialComponent', () => {
  let component: WisdomTestimonialComponent;
  let fixture: ComponentFixture<WisdomTestimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomTestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WisdomTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
