import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeChefComponent } from './become-chef.component';

describe('BecomeChefComponent', () => {
  let component: BecomeChefComponent;
  let fixture: ComponentFixture<BecomeChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
