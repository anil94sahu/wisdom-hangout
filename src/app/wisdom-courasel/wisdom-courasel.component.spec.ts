import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WisdomCouraselComponent } from './wisdom-courasel.component';

describe('WisdomCouraselComponent', () => {
  let component: WisdomCouraselComponent;
  let fixture: ComponentFixture<WisdomCouraselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomCouraselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WisdomCouraselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
